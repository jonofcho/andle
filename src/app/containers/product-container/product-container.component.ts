import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from '@apollo/client/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  public productObs;
  public $productData;
  public $productImages;
  public $productDetails;
  constructor(private route: ActivatedRoute, private shopifyService: ShopifyService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let currentProductHandle = data.id;
      this.$productData = this.shopifyService.getProductByHandle(currentProductHandle)
      this.$productImages = this.$productData.pipe(
        tap(obs => {
          console.log('this is the obs' , obs);
          
        }),
        map(obs => {
          return obs['productByHandle']['images']['edges']
        })
      )
    })
  }

  public onAddToCart(productDetails){
    console.log('cibtauber atc cifred');
    
    this.shopifyService.addVariantToCart(productDetails).subscribe(data => {
      console.log('this is the return from atc' , data);
      
    })
  }
}
