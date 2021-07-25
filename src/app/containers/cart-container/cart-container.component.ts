import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShopifyService } from 'src/app/services/shopify.service';
import { LoneSchemaDefinitionRule } from 'graphql';
import { map } from 'rxjs/operators';
import { Observable } from '@apollo/client/core';
import { CartService } from 'src/app/services/cart.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  public $checkoutList;
  public $checkoutSummaryDetails;
  public checkoutID;
  constructor(private shopifyService:ShopifyService,  private cookieService:CookieService, private cartService:CartService) { }

  ngOnInit(): void {
    this.checkoutID = this.cookieService.get('checkoutID');
    let $checkoutDetails = this.cartService.getCheckoutDetails(this.checkoutID)
    this.setCheckoutData($checkoutDetails)
  }

  public setCheckoutData($checkoutDetails){
    this.$checkoutList = $checkoutDetails.pipe(
      map(obs => {
        return obs['lineItems']['edges']
      })
    )
    this.$checkoutSummaryDetails = $checkoutDetails.pipe(
      map(obs => {
        let obj = {
          subtotalPrice: obs['subtotalPriceV2']['amount'],
          totalPrice: obs['totalPriceV2']['amount'],
          // shippingPrice: obs['shippingLine']['priceV2']['amount'],
          totalTax: obs['totalTaxV2']['amount']

        }
        return obj
      })
    )
  }

  public updateQuantity(evt){

    
    this.cartService.updateCartItemQuantity(evt).subscribe( data => {
      console.log(data);
      this.setCheckoutData(of(data['data']['checkoutLineItemsUpdate']['checkout']))
          },err => {
      console.log('there was an error updating' , err);
      
    })
  }

  public removeLineItem(evt){
    this.cartService.deleteCartItem(evt).subscribe(data => {
      console.log('return  dlete data' , data);
      this.setCheckoutData(of(data['data']['checkoutLineItemsRemove']['checkout']))

      
    }, err => {
      console.log(err)
    })
  }

  
}
