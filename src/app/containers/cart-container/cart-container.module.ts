import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartSummaryGridComponent } from './cart-summary-grid/cart-summary-grid.component';
import { CartSummaryItemComponent } from './cart-summary-item/cart-summary-item.component';
import { CartContainerComponent } from './cart-container.component';



@NgModule({
  declarations: [
    CartSummaryComponent,
    CartSummaryGridComponent,
    CartSummaryItemComponent,
    CartContainerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CartContainerModule { }
