import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionContainerComponent } from './containers/collection-container/collection-container.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { CollectionGridComponent } from './containers/collection-container/components/collection-grid/collection-grid.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { CustomerContainerComponent } from './containers/customer-container/customer-container.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { MissingPageComponent } from './containers/shared/missing-page/missing-page.component';


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
    component: ProductContainerComponent,
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
  {
    path: 'collections',
    component: CollectionContainerComponent,
  },
  // {
  //   path: 'archive',
  //   component: 
  // },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'cart',
    component: CartContainerComponent,
  },
  { 
    path: '404', 
    component: MissingPageComponent 
  },
  { 
    path: '**', 
    redirectTo: '/404' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
