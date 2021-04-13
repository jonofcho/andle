import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryItemComponent } from './cart-summary-item.component';

describe('CartSummaryItemComponent', () => {
  let component: CartSummaryItemComponent;
  let fixture: ComponentFixture<CartSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
