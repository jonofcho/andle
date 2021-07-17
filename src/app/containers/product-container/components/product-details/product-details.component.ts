import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface CurrentVariantDetails {
  variantColor: string,
  variantScent: string,
  variantPrice: string,
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails;
  public productVariants;
  public selectedVariant;
  public currentVariantDetails: CurrentVariantDetails = <CurrentVariantDetails>{};

  @Input() set details(val) {
    if (val) {
      console.log('this is the val', val);
      let variantData = val['currentVariantData'];
      let varTitleSplit = variantData.title.split(' / ');
      this.currentVariantDetails['variantColor'] = varTitleSplit[0];
      this.currentVariantDetails['variantScent'] = varTitleSplit[1];
      this.currentVariantDetails['variantPrice'] = variantData['priceV2']['amount'];
      this.productDetails = val['productByHandle'];
      // this.productVariants = this.productDetails['variants']['edges']
      // console.log('this is the product Details', this.productVariants);
      // SET DEFAULT VARIANT BASED ON QUERY PARAM PROBABLY LATER
      // this.selectedVariant = this.productVariants[0]['node']
    }
  };
  @Output() atcClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  public onAtcClick() {
    this.atcClick.emit(this.selectedVariant)
  }
  public setSelectedVariant(variant) {
    console.log('this is the selected variant', variant);
    this.selectedVariant = variant;
  }
}
