import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { CollectionItemComponent } from './containers/collection-container/components/collection-item/collection-item.component';
import { HeaderRoutingComponent } from './containers/header-routing/header-routing.component';
import { CollectionContainerComponent } from './containers/collection-container/collection-container.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { CollectionGridComponent } from './containers/collection-container/components/collection-grid/collection-grid.component';
import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CollectionContainerModule } from './containers/collection-container/collection-container.module';
import { ProductContainerModule } from './containers/product-container/product-container.module';
import { ShopifyService } from './services/shopify.service';
import { Apollo } from 'apollo-angular';
import { HttpLink } from '@apollo/client/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderRoutingComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    CollectionContainerModule,
    AppRoutingModule,
    ProductContainerModule,
    GraphQLModule
  ],
  providers: [ShopifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
