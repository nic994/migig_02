import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModel } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { myProducts } from '../models/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private productsUrl = '../common/models/products';
  // constructor(private https: HttpClient) {}

  getProducts(): Observable<ProductsModel[]> {
    return of(myProducts);
    // return this.https.get<[]>(this.productsUrl);
  }
}
