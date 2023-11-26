import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../common/models/product.model';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categories: string[] = ['Guitar', 'Keyboard', 'Cymbals', 'Snare', 'Ukulele'];
  allProducts: ProductsModel[] = [];
  filteredProducts: ProductsModel[] = [];
  selectedCategory: string = 'All';
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
    if (this.selectedCategory === 'All') {
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
