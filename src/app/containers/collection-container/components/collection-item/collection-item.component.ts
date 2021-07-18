import { Component, OnInit, Input } from '@angular/core';

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
  @Input() set productData(values) {
    console.log(values);
    
    this.collItemTitle = values.productTitle;
    this.collItemImgSrc = values.variantImg;
    this.collItemHandle = values.productHandle;
    this.collItemVariantColor = values.variantTitle.split(' / ')[0];
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

}
