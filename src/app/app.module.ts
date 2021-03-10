import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { HeaderRoutingComponent } from './header-routing/header-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    CollectionItemComponent,
    HeaderRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
