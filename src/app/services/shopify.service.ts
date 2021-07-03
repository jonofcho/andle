import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private apollo: Apollo, private cookieService: CookieService) { }

  public createCheckout() {
    let checkoutID = this.cookieService.get('checkoutID');
    if (!checkoutID) {
      const mutation = gql`
        mutation {
          checkoutCreate(input: {}) {
            checkout {
              id
              webUrl
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                  }
                }
              }
            }
          }
        }
      `
      this.apollo.mutate({
        // @ts-ignore
        mutation: mutation,
      }).subscribe(checkoutData => {
        let checkoutCreate = checkoutData['data']['checkoutCreate']
        this.cookieService.set("checkoutID", checkoutCreate['checkout']['id'])
        this.cookieService.set("checkoutUrl", checkoutCreate['checkout']['webUrl'])
        console.log('this is the checkout data', checkoutData);

      })
    }
  }

  public getCheckoutDetails(checkoutID) {
    const query: any = gql`
{
	node(id:"${checkoutID}"){
    id
    ... on Checkout{
      id
      totalPriceV2{
        amount
      }
      lineItems(first: 20) {
        edges {
          node {
            quantity
						variant{
              title
              selectedOptions{
                name
                value
              }
              image(maxWidth: 300, maxHeight: 300){
                originalSrc
              }
            }
            title
            
          }
        }
      }
    }
  }
}
  `
    return this.apollo.watchQuery({
      // @ts-ignore
      query: query,
    }).valueChanges.pipe(
      tap(obs => {
        console.log(obs);

      }),
      map(obs => {
        return obs['data']
      })
    )
  }




  public addVariantToCart(variantDetails) {
    let mutation: any;
    let variantId = variantDetails['id']
    let checkoutID = this.cookieService.get('checkoutID');
    if (checkoutID) {
      mutation = gql`
        mutation ($variantId: ID!, $checkoutId: ID!) {
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

  public getProductsByQuery(searchquery) {
    console.log('this is the searchQuery' , searchquery);
    
    const query: any = gql`
    {
      products(first: 20, query: "${searchquery}") {
        edges {
            node {
              id
              title
              description
              tags
              handle
              variants(first: 20){
                edges{
                  node{
                    title
                    id
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    id
                    src

                  }
                }
              }
            }
          }
        }
    }
    ` 
    return this.apollo.watchQuery({
      // @ts-ignore
      query: query,
    }).valueChanges.pipe(
      map(obs => {
        return obs['data']['products']['edges']
      }),
      tap(obs => {
        console.log('this is the search obs' , obs);
        return obs
      }),
    )
  }


  public getProductByHandle(productHandle) {
    const query: any = gql`
    {
      productByHandle(handle: "${productHandle}") {
        title
        description
        id
        variants(first: 5){
          edges{
            node{
              id
              title
              image{
                originalSrc
              }
              priceV2{
                amount
                currencyCode
              }

            }
          }
        }
        images(first: 10) {
          edges {
            node {
              id
              originalSrc
            }
          }
        }
      }
    }
    `
    return this.apollo.watchQuery({
      // @ts-ignore
      query: query,
    }).valueChanges.pipe(
      map(obs => {
        return obs['data']
      })
    )
  }


  public getCollectionByHandle(collectionHandle) {
    console.log('collectionHandle', collectionHandle);

    const basicQuery: any = gql`
    {
      collectionByHandle(handle: "${collectionHandle}") {
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              tags
              handle
              variants(first: 20){
                edges{
                  node{
                    title
                    id
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    id
                    src

                  }
                }
              }
            }
          }
        }
      }
    }
    `
    return this.apollo.watchQuery({
      // @ts-ignore
      query: basicQuery,
    }).valueChanges.pipe(
      map(obs => {
        return obs['data']['collectionByHandle']['products']['edges']
      })
    )
  }
}
