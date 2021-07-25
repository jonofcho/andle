import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShopifyService } from 'src/app/services/shopify.service';
import { LoneSchemaDefinitionRule } from 'graphql';
import { map } from 'rxjs/operators';
import { Observable } from '@apollo/client/core';
import { CartService } from 'src/app/services/cart.service';

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
    let $checkoutDetails = this.shopifyService.getCheckoutDetails(this.checkoutID)
    this.setCheckoutData($checkoutDetails)
  }

  public setCheckoutData($checkoutDetails){
    this.$checkoutList = $checkoutDetails.pipe(
      map(obs => {
        return obs['node']['lineItems']['edges']
      })
    )
    this.$checkoutSummaryDetails = $checkoutDetails.pipe(
      map(obs => {
        let obj = {
          subtotalPrice: obs['node']['subtotalPriceV2']['amount'],
          totalPrice: obs['node']['totalPriceV2']['amount'],
          // shippingPrice: obs['node']['shippingLine']['priceV2']['amount'],
          totalTax: obs['node']['totalTaxV2']['amount']

        }
        return obj
      })
    )
  }

  public updateQuantity(evt){
    console.log('update was fired' , evt);
    console.log('update checkoutList' , )
    
    this.cartService.updateCartItemQuantity(evt).subscribe( data => {
      console.log(data);
          },err => {
      console.log('there was an error updating' , err);
      
    })
  }

  
}
