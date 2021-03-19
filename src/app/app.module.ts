import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionGridComponent } from './collection/collection-grid.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { HeaderRoutingComponent } from './header-routing/header-routing.component';
import { CollectionContainerComponent } from './collection-container/collection-container.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionGridComponent,
    ProductComponent,
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
