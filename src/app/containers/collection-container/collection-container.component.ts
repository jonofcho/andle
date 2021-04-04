import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';


@Component({
  selector: 'collection-container',
  templateUrl: './collection-container.component.html',
  styleUrls: ['./collection-container.component.scss']
})
export class CollectionContainerComponent implements OnInit {

  constructor(private shopifyService: ShopifyService ) { }

  ngOnInit() {
    console.log('fired');
    
    this.shopifyService.getCollection()

  }

}
