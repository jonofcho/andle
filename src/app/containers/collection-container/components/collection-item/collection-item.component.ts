import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  public collItemTitle: string;
  public collItemImgSrc: string;
  public collItemHandle: string;
  public collItemVariants: any[];
  public collItemSubTitle: string;
  public collItemVariantColor: string;
  public collItemVariantScent: string;
  public collItemVariantPrice: string;
  public collItemVariantId: string;
  @Output() onAtc: EventEmitter<any> = new EventEmitter();

  @Input() set productData(values) {
    console.log(values);
    
    this.collItemTitle = values.productTitle;
    this.collItemImgSrc = values.variantImg;
    this.collItemHandle = values.productHandle;
    if(values.variantTitle.split(' / ')[0] != 'Multi'){
      this.collItemVariantColor = values.variantTitle.split(' / ')[0];
    }else{
      this.collItemVariantColor = ''
    }
    this.collItemVariantScent = values.variantTitle.split(' / ')[1];

    this.collItemVariantId = values.variantId;
    this.collItemVariantPrice = values.variantPrice
    // this.collItemVariants = values.node.variants.edges.map(v => {
    //   let obj = {};
    //   obj['handle'] = v.node.title.split(' ').join('-');
    //   obj['id'] = v.node.id;
    //   return obj
    // })

    console.log('these are thevalues', this.collItemTitle, values.node);
    console.log('variants');

  }

  constructor() { }

  ngOnInit() {

  }
  public atcEmit(){
    this.onAtc.emit(this.collItemVariantId)
  }

}
