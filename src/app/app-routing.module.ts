import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionGridComponent } from './collection/collection-grid.component';
import { CollectionContainerComponent } from './collection-container/collection-container.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: CollectionGridComponent
  },
  {
    path: 'shop',
    component: CollectionContainerComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
