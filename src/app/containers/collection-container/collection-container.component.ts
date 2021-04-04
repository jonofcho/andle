import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'collection-container',
  templateUrl: './collection-container.component.html',
  styleUrls: ['./collection-container.component.scss']
})
export class CollectionContainerComponent implements OnInit {
  public collectionByHandle;
  constructor(
    private shopifyService: ShopifyService,
    private router: Router 
    ) { }
  
  ngOnInit() {
    let currentRoute = this.router.url;
    console.log(currentRoute);
    
    if(currentRoute === '/' || currentRoute === '/shop'){
      currentRoute = 'frontpage'
    }
    this.collectionByHandle = this.shopifyService.getCollectionByHandle(currentRoute)

  
  }



}
