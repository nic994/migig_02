import { Injectable } from '@angular/core';
import { ProductsModel } from '../common/models/product.model';
import { Observable, of } from 'rxjs';
import { myProducts } from '../common/models/product-percussion';
@Injectable({
  providedIn: 'root',
})
export class ProductsPercussionService {
  // private productsUrl = '../common/models/products';
  // constructor(private https: HttpClient) {}

  getProducts(): Observable<ProductsModel[]> {
    return of(myProducts);
    // return this.https.get<[]>(this.productsUrl);
  }
}
