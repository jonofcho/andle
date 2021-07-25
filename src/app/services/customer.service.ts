import { Injectable } from '@angular/core';
import { ShopifyService } from './shopify.service';
import { CookieService } from 'ngx-cookie-service';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private shopifyService: ShopifyService, private cookieService: CookieService, private cartService:CartService) { }


  public goToCheckout() {
    let checkoutUrl = this.cookieService.get('checkoutUrl');
    console.log('this is the checkoutUrl' , checkoutUrl);
    
    window.location.href = checkoutUrl;

  }
}
