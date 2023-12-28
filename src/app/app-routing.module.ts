import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ProductGuitarComponent } from './product-guitar/product-guitar.component';
import { ProductKeyboardComponent } from './product-keyboard/product-keyboard.component';
import { ProductPercussionComponent } from './product-percussion/product-percussion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'product/guitar', component: ProductGuitarComponent },
  { path: 'product/keyboard', component: ProductKeyboardComponent },
  { path: 'product/percussion', component: ProductPercussionComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
