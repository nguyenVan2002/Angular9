import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponentTsComponent } from './products.component.ts.component';

describe('ProductsComponentTsComponent', () => {
  let component: ProductsComponentTsComponent;
  let fixture: ComponentFixture<ProductsComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponentTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
