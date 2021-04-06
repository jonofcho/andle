import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    BrowserAnimationsModule,
  ],
  providers: [ShopifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
