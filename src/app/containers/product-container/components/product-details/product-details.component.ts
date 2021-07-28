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
  public pending:boolean = false;

  @Input() set details(val) {
    if (val) {
      console.log('this is the val', val);
      this.selectedVariant = val['currentVariantData'];
      let varTitleSplit = this.selectedVariant.title.split(' / ');
      this.currentVariantDetails['variantColor'] = varTitleSplit[0];
      this.currentVariantDetails['variantScent'] = varTitleSplit[1];
      this.currentVariantDetails['variantPrice'] = this.selectedVariant['priceV2']['amount'];
      this.productDetails = val['productByHandle'];
      // this.productVariants = this.productDetails['variants']['edges']
      // console.log('this is the product Details', this.productVariants);
      // SET DEFAULT VARIANT BASED ON QUERY PARAM PROBABLY LATER
      // this.selectedVariant = this.productVariants[0]['node']
    }
  };
  @Output() atcClick: EventEmitter<any> = new EventEmitter();
  @Output() bnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  public onAtcClick() {
    this.atcClick.emit(this.selectedVariant)
    this.pending = true;
    setTimeout(() => {
      this.pending = false;
    },1000)
  }
  public setSelectedVariant(variant) {
    console.log('this is the selected variant', variant);
    this.selectedVariant = variant;
  }
  public onBuyNowClick(){ 
    this.bnClick.emit(this.selectedVariant)
  }
}
