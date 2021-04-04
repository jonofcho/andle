import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private apollo: Apollo) { }

  public getCollection(collectionHandle) {
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
