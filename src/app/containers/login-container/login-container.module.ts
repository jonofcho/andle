import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginContainerComponent } from './login-container.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginContainerComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class LoginContainerModule { }
