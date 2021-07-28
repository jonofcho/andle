import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, concatMap, take, withLatestFrom } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { filter } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { forkJoin, combineLatest } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductContainerComponent implements OnInit {
  public productObs;
  public relatedProducts: any[] = []
  public $productData;
  public $productImages;
  public $productDetails;
  public $variantData;
  public $variantImages;
  public currentProductHandle;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private shopifyService: ShopifyService,
    private cartService: CartService,
  ) {
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

        this.currentProductHandle = params.id;
        this.$productData = this.shopifyService.getProductByHandle(this.currentProductHandle)
        this.$variantData = this.$productData.pipe(
          map(productObs => {
            let varArr = productObs['productByHandle']['variants']['edges']
            let newProductObs = JSON.parse(JSON.stringify(productObs));
            this.getRelatedProducts(params, newProductObs, varArr, queryParams.id)
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

  public getVariantImages(color: string) {
    return this.$productImages.pipe(
      map((prodImgObs: []) => {
        let variantImages = prodImgObs.filter((pi: any) => {
          let prodImageAltText: string = pi['node']['altText']
          return prodImageAltText === color || prodImageAltText === 'Collection';
        })
        // if(variantImages.length > 1){
        //   return variantImages.reverse()
        // }
        return variantImages
      })
    )
  }
  public onBuyNow(evt) {
    console.log(evt);
    let atcObject = {
      id: evt.id
    }
    this.cartService.addVariantToCart(atcObject).subscribe(data => {
      this.customerService.goToCheckout();
    }, err => {
      console.log('atc error');

    })
  }

  public onAddToCart(productDetails) {
    console.log('product details', productDetails);

    this.cartService.addVariantToCart(productDetails).subscribe(data => {
      let cartQuantity = data['data']['checkoutLineItemsAdd']['checkout']['lineItems']['edges'].reduce((a,b)=>{
        return a + parseInt(b['node']['quantity'])
      }, 0)
      this.cartService.cartChange.next(cartQuantity)
    })
  }

  public getRelatedProducts(handle, parentProduct, varArr, currentVariantId) {
    this.relatedProducts = varArr.filter(v => {
      return v['node']['id'] != currentVariantId;
    })
    console.log('related Products', this.relatedProducts);

    this.relatedProducts = this.relatedProducts.map(rp => {
      let obj = {}
      console.log('handle', handle);

      obj['productTitle'] = parentProduct['productByHandle']['title'];
      obj['variantImg'] = rp['node']['image']['originalSrc'];
      obj['productHandle'] = handle.id;
      obj['variantTitle'] = rp['node']['title'];;
      obj['variantId'] = rp['node']['id'];
      obj['variantPrice'] = rp['node']['priceV2']['amount'];


      return obj
    })
    let relatedProductFallBackArrByHandle = ['cinnamon-embedded-cylinder', 'mini-cube', 'terra', 'u-shaped']
    if(this.relatedProducts.length < 3){
      console.log('related fired');
      
      let filteredFallBack = relatedProductFallBackArrByHandle.filter(d => {
        return d != this.currentProductHandle;
      })
      filteredFallBack = filteredFallBack.splice(0 , 3 - this.relatedProducts.length); 
      let obsArr = filteredFallBack.map(h => {
        return this.shopifyService.getProductByHandle(h);
      })
      console.log('thisi s the objArr' , obsArr)
      combineLatest(
        obsArr
      )
      .pipe(
     
      ).subscribe( data => {
        console.log('related testing' , data);
        data.map(d => {
          let robj = {}
          let result = d['productByHandle']['variants']['edges'][0];
          robj['productTitle'] = parentProduct['productByHandle']['title'];
          robj['variantImg'] = result['node']['image']['originalSrc'];
          robj['productHandle'] = this.currentProductHandle
          robj['variantTitle'] = result['node']['title'];;
          robj['variantId'] = result['node']['id'];
          robj['variantPrice'] = result['node']['priceV2']['amount'];
          this.relatedProducts.push(robj)
        })
      })
    }
    
    // this.relatedProducts.slice(0,2)
    console.log('these are the related PRoducts', this.relatedProducts);

  }
}
