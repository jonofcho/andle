import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, concatMap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductContainerComponent implements OnInit {
  public productObs;
  public relatedProducts:any[] = []
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
            let newProductObs = JSON.parse(JSON.stringify(productObs));
            this.getRelatedProducts(params , newProductObs, varArr, queryParams.id)
            console.log(productObs['productByHandle']['variants']['edges']);
            let currentVariantData = varArr.find(v => {
              return v['node']['id'] === queryParams.id;
            })
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
        if(variantImages.length > 1){
          return variantImages.reverse()
        }
        return variantImages
      })
    )
  }

  public onAddToCart(productDetails) {
    this.customerService.addVariantToCart(productDetails)
  }

  public getRelatedProducts(handle , parentProduct , varArr, currentVariantId) {
    console.log('related PRoducts' , parentProduct,  varArr);
    this.relatedProducts = varArr.filter(v => {
      return v['node']['id'] != currentVariantId;
    })
    this.relatedProducts = this.relatedProducts.map(rp => {
      let obj = {}
      console.log('handle' , handle);
      
      obj['productTitle'] = parentProduct['productByHandle']['title'];
      obj['variantImg'] = rp['node']['image']['originalSrc'];
      obj['productHandle'] = handle.id  ;
      obj['variantTitle'] = rp['node']['title'];;


      return obj
    })
    if(this.relatedProducts.length > 3){
    
      this.relatedProducts = this.relatedProducts.slice(0,2);

    }
    console.log('these are the related PRoducts' , this.relatedProducts);
    
  }
}
