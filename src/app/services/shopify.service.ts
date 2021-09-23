import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private apollo: Apollo, private cookieService: CookieService) { }

  public createCustomer(input) {
    const mutation = gql`

    mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`
    this.apollo.mutate({
      // @ts-ignore
      mutation: mutation,
    }).subscribe(checkoutData => { })

  }


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


  




  

  public getProductsByQuery(searchquery) {
    console.log('this is the searchQuery', searchquery);

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
        console.log(obs);

        let product = obs['data']['products']['edges']
        return product
      }),
      map((productobs: any[]) => {
        return this.getVariantArr(productobs)

      })
    )
  }


  public getProductByHandle(productHandle) {
    const query: any = gql`
    {
      productByHandle(handle: "${productHandle}") {
        title
        description
        id
        variants(first: 10){
          edges{
            node{
              id
              title
              image{
                originalSrc
                altText
              }
              priceV2{
                amount
                currencyCode
              }

            }
          }
        }
        images(first: 30) {
          edges {
            node {
              id
              originalSrc
              altText
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
        products(first: 7) {
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
                    image{
                      originalSrc
                    }
                    priceV2{
                      amount
                    }
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
        let product = obs['data']['collectionByHandle']['products']['edges']
        return product
      }),
      map((productobs: any[]) => {
        return this.getVariantArr(productobs)

      })

    )
  }

  private getVariantArr(productobs) {
    console.log('this isthe productobs', productobs);
    let variantArr = [];
    productobs.map(p => {
      let prod = p['node']
      prod['variants']['edges'].map(variant => {
        let obj = {};
        obj['productDescription'] = prod['description'];
        obj['productHandle'] = prod['handle'];
        obj['productId'] = prod['id'];
        obj['productTags'] = prod['tags'];
        obj['productTitle'] = prod['title'];
        obj['variantId'] = variant['node']['id']
        obj['variantTitle'] = variant['node']['title']
        obj['variantPrice'] = variant['node']['priceV2']['amount']
        obj['variantImg'] = variant['node']['image']['originalSrc']
        variantArr.push(obj)
      })
    })

    return variantArr
  }
}
