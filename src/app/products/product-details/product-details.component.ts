import { Component } from '@angular/core';
import { ProductsModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product!: ProductsModel;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.product = navigation.extras.state['product'];
    }
  }
}
