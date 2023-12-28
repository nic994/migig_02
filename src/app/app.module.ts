import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/models/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ProductGuitarComponent } from './product-guitar/product-guitar.component';
import { ProductKeyboardComponent } from './product-keyboard/product-keyboard.component';
import { ProductPercussionComponent } from './product-percussion/product-percussion.component';

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
