import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGuitarComponent } from './product-guitar.component';

describe('ProductGuitarComponent', () => {
  let component: ProductGuitarComponent;
  let fixture: ComponentFixture<ProductGuitarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGuitarComponent]
    });
    fixture = TestBed.createComponent(ProductGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
