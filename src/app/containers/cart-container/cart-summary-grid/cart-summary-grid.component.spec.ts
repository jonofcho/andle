import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryGridComponent } from './cart-summary-grid.component';

describe('CartSummaryGridComponent', () => {
  let component: CartSummaryGridComponent;
  let fixture: ComponentFixture<CartSummaryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummaryGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
