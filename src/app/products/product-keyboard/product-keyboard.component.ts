import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsModel } from '../../models/product.model';
import { ProductsKeyboardService } from '../../services/product-keyboard.service';

@Component({
  selector: 'app-product-keyboard',
  templateUrl: './product-keyboard.component.html',
  styleUrls: ['./product-keyboard.component.css'],
})
export class ProductKeyboardComponent implements OnInit {
  categories: string[] = [
    'All Keyboard',
    'MIDI Controllers',
    'Digital Pianos',
    'Synthesizers',
  ];
  allProducts: ProductsModel[] = [];
  filteredProducts: ProductsModel[] = [];
  selectedCategory: string = 'All Keyboard';
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(
    private productService: ProductsKeyboardService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((allProducts) => {
      this.allProducts = allProducts;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    if (this.selectedCategory === 'All Keyboard') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  get paginatedProducts(): ProductsModel[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  onPageChange(page: number, event: Event): void {
    event.preventDefault();
    this.currentPage = page;
  }
  getPages(): number[] {
    const pageCount = Math.ceil(
      this.filteredProducts.length / this.itemsPerPage
    );
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
  onCardClick(product: ProductsModel): void {
    this.router.navigate(['/product-details'], { state: { product: product } });
  }
}
