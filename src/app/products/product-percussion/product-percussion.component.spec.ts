import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPercussionComponent } from './product-percussion.component';

describe('ProductPercussionComponent', () => {
  let component: ProductPercussionComponent;
  let fixture: ComponentFixture<ProductPercussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPercussionComponent]
    });
    fixture = TestBed.createComponent(ProductPercussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
