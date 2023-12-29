import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { myProducts } from '../models/product-keyboard';
@Injectable({
  providedIn: 'root',
})
export class ProductsKeyboardService {
  // private productsUrl = '../common/models/products';
  // constructor(private https: HttpClient) {}

  getProducts(): Observable<ProductsModel[]> {
    return of(myProducts);
    // return this.https.get<[]>(this.productsUrl);
  }
}
