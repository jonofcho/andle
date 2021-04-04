import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductImageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductContainerModule { }
