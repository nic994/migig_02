import { Component } from '@angular/core';
import { ProductsPercussionService } from '../../services/product-percussion.service';
import { Router } from '@angular/router';
import { ProductsModel } from '../../models/product.model';

@Component({
  selector: 'app-product-percussion',
  templateUrl: './product-percussion.component.html',
  styleUrls: ['./product-percussion.component.css'],
})
export class ProductPercussionComponent {
  categories: string[] = [
    'All Percussion',
    'Cymbals',
    'Snare',
    'Drum Hardware',
  ];
  allProducts: ProductsModel[] = [];
  filteredProducts: ProductsModel[] = [];
  selectedCategory: string = 'All Percussion';
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(
    private productService: ProductsPercussionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((allProducts) => {
      this.allProducts = allProducts;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    if (this.selectedCategory === 'All Percussion') {
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
