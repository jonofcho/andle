import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionContainerComponent } from './containers/collection-container/collection-container.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { CollectionGridComponent } from './containers/collection-container/components/collection-grid/collection-grid.component';


const routes: Routes = [
  {
    path: '',
    component: CollectionContainerComponent
  },
  {
    path: 'shop',
    component: CollectionContainerComponent,
  },
  {
    path: 'product/:id',
    component: ProductContainerComponent
  },
  // {
  //   path: 'read',
  //   component: 
  // },
  // {
  //   path: 'archive',
  //   component: 
  // },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
