import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-guitar',
  templateUrl: './product-guitar.component.html',
  styleUrls: ['./product-guitar.component.css'],
})
export class ProductGuitarComponent implements OnInit {
  categories: string[] = [
    'All Guitar',
    'Classical Guitar',
    'Acoustic Guitar',
    'Electric Guitar',
    'Bass Guitar',
    'Ukulele',
  ];
  allProducts: ProductsModel[] = [];
  filteredProducts: ProductsModel[] = [];
  selectedCategory: string = 'All Guitar';
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((allProducts) => {
      this.allProducts = allProducts;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    if (this.selectedCategory === 'All Guitar') {
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
