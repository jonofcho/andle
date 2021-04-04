import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private apollo: Apollo) { }
  public getProductByHandle(productHandle) {
    const query: any = gql`
    {

      productByHandle(handle: "${productHandle}") {
        title
        description
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
      tap(obs => {
        console.log(obs);
        
      }),
      map(obs => {
        return obs['data']
      })
    )
  }


  public getCollectionByHandle(collectionHandle) {
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
              images(first:1) {
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
      tap(obs => {
        console.log('main observable' , obs);
        
      }), 
      map(obs => {
        return obs['data']['collectionByHandle']['products']['edges']
      })
    )
  }
}
