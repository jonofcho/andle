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

@NgModule({
  declarations: [
    AppComponent,
    CollectionGridComponent,
    ProductContainerComponent,
    FooterComponent,
    HeaderComponent,
    CollectionItemComponent,
    HeaderRoutingComponent,
    CollectionContainerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
