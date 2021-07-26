import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { CollectionContainerComponent } from './collection-container.component';
import { CollectionGridComponent } from './components/collection-grid/collection-grid.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CollectionItemComponent,
    CollectionContainerComponent,
    CollectionGridComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [
    CollectionItemComponent,
  ]
})
export class CollectionContainerModule { }
