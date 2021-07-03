import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'collection-container',
  templateUrl: './collection-container.component.html',
  styleUrls: ['./collection-container.component.scss']
})
export class CollectionContainerComponent implements OnInit {
  public collectionByHandle;
  constructor(
    private shopifyService: ShopifyService,
    private router: Router ,
    private route:ActivatedRoute,
    ) { }
  
  ngOnInit() {
    let currentRoute = this.router.url;
    console.log(currentRoute);
    
    if(currentRoute === '/' || currentRoute === '/shop'){
      currentRoute = 'frontpage'
    }
    this.route.queryParams
    .subscribe(params => {
      if(params.searchQuery != undefined){
        let searchQuery = params.searchQuery;
        console.log('search successful' , searchQuery); // { order: "popular" }
        // params.searchQuery
        // this.order = params.order;
        // console.log(this.order); // popular
        this.collectionByHandle = this.shopifyService.getProductsByQuery(searchQuery)
      }else{
        this.collectionByHandle = this.shopifyService.getCollectionByHandle(currentRoute)

      }
    }
  );  


  
  }



}
