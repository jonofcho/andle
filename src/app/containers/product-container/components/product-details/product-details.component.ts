import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails;
  public productVariants;
  public selectedVariant;
  @Input() set details(val) {
    if (val) {
      this.productDetails = val['productByHandle'];
      this.productVariants = this.productDetails['variants']['edges']
      console.log('this is the product Details', this.productVariants);
      
      // SET DEFAULT VARIANT BASED ON QUERY PARAM PROBABLY LATER
      this.selectedVariant = this.productVariants[0]['node']
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
    console.log('this is the selected variant' , variant);
    this.selectedVariant = variant;
  }
}
