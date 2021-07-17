import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, concatMap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { filter } from 'rxjs/operators';
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
  public $variantData;
  public $variantImages;
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private shopifyService: ShopifyService) {
  }

  ngOnInit() {
    //   this.route.queryParams
    //   .filter(params => params.order)
    //   .subscribe(params => {
    //     console.log(params); // { order: "popular" }

    //     this.order = params.order;
    //     console.log(this.order); // popular
    //   }
    // );
    this.route.params.subscribe(params => {
      console.log('params data', params);
      this.route.queryParams.subscribe(queryParams => {
        console.log('query params', queryParams);

        let currentProductHandle = params.id;
        this.$productData = this.shopifyService.getProductByHandle(currentProductHandle)
        this.$variantData = this.$productData.pipe(
          map(productObs => {
            let varArr = productObs['productByHandle']['variants']['edges']
            console.log(productObs['productByHandle']['variants']['edges']);
            let currentVariantData = varArr.find(v => {
              return v['node']['id'] === queryParams.id;
            })
            let newProductObs = JSON.parse(JSON.stringify(productObs));
            newProductObs['currentVariantData'] = currentVariantData['node'];
            return newProductObs
          }),
        )
        this.$productImages = this.$productData.pipe(
          map(obs => {
            return obs['productByHandle']['images']['edges']
          })
        )
        this.$variantImages = this.$variantData.pipe(
          concatMap((obs) => {
            let color = obs['currentVariantData']['title'].split(' / ')[0];
            return this.getVariantImages(color);

          })
        )
      })
    })
  }
  
  public getVariantImages(color:string ){
    return this.$productImages.pipe(
      map((prodImgObs: []) => {
        let variantImages = prodImgObs.filter((pi:any) => {
          let prodImageAltText:string = pi['node']['altText']
          return prodImageAltText === color || prodImageAltText === 'Collection';
        })
        return variantImages.reverse()
      })
    )
  }

  public onAddToCart(productDetails) {
    this.customerService.addVariantToCart(productDetails)
  }
}
