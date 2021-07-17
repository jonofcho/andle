import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './containers/footer/footer.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CollectionContainerModule } from './containers/collection-container/collection-container.module';
import { ProductContainerModule } from './containers/product-container/product-container.module';
import { ShopifyService } from './services/shopify.service';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CartContainerModule } from './containers/cart-container/cart-container.module';
import { LoginContainerModule } from './containers/login-container/login-container.module';
import { CustomerService } from './services/customer.service';
import { CookieService } from 'ngx-cookie-service'
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './containers/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    CollectionContainerModule,
    AppRoutingModule,
    ProductContainerModule,
    GraphQLModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CartContainerModule,
    LoginContainerModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    ShopifyService,
    CustomerService,
    CookieService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ss: ShopifyService) => () => { return ss.createCheckout() },
      deps: [ShopifyService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
