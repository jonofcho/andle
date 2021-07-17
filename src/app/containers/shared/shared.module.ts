import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MissingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
