import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ProductGuitarComponent } from './products/product-guitar/product-guitar.component';
import { ProductKeyboardComponent } from './products/product-keyboard/product-keyboard.component';
import { ProductPercussionComponent } from './products/product-percussion/product-percussion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AboutComponent,
    ProductGuitarComponent,
    ProductKeyboardComponent,
    ProductPercussionComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
