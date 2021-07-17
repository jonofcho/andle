import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CollectionItemComponent } from '../collection-container/components/collection-item/collection-item.component';
import { CollectionContainerModule } from '../collection-container/collection-container.module';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductImageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    CollectionContainerModule,
  ]
})
export class ProductContainerModule { }
