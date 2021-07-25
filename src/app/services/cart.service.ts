import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apollo: Apollo, private cookieService: CookieService) { }


  public updateCartItemQuantity(updateObj) {
    let lineId = updateObj.lineId;
    let variantId = updateObj.variantId;
    let quantity = parseInt(updateObj.quantity);
    console.log(updateObj);
    
    let mutation: any;
    // let variantId = variantDetails['id']
    let checkoutID = this.cookieService.get('checkoutID');
    if (checkoutID) {
      mutation = gql`
        mutation (
          $variantId: ID!, 
          $checkoutId: ID!,
          $id: ID!,
          $quantity: Int,
        ) {
        checkoutLineItemsUpdate(
          lineItems: [
            { 
              id: $id,
              variantId: $variantId, 
              quantity: $quantity
            }
          ],
          checkoutId: $checkoutId
        ) {
          checkout {
            id
          },
          checkoutUserErrors {
              code
              field
              message
            }
        }
      }
      `
    }
    return this.apollo.mutate({
      // @ts-ignore
      mutation: mutation,
      variables: {
        variantId: variantId,
        checkoutId: checkoutID,
        quantity: quantity,
        id: lineId
      }
    })

  }

  public addVariantToCart(variantDetails) {
    console.log('variant details', variantDetails);

    let mutation: any;
    let variantId = variantDetails['id']
    let checkoutID = this.cookieService.get('checkoutID');
    if (checkoutID) {
      mutation = gql`
        mutation (
          $variantId: ID!, 
          $checkoutId: ID!
          ) {
          checkoutLineItemsAdd(
            lineItems: [
              { 
                variantId: $variantId, quantity: 1 
              }
            ],
            checkoutId: $checkoutId
          ) {
            checkout {
              id
              webUrl
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `
    }

    return this.apollo.mutate({
      // @ts-ignore
      mutation: mutation,
      variables: {
        variantId,
        checkoutId: checkoutID
      }
    })
  }
}
