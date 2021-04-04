import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private apollo: Apollo) { }

  public getCollection() {
    const basicQuery:any = gql`
      {
        shop {
          name
        }
      }
    `
    return this.apollo.watchQuery({
      query: basicQuery,
    }).valueChanges
  }
}
