import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeyboardComponent } from './product-keyboard.component';

describe('ProductKeyboardComponent', () => {
  let component: ProductKeyboardComponent;
  let fixture: ComponentFixture<ProductKeyboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductKeyboardComponent]
    });
    fixture = TestBed.createComponent(ProductKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
