import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  public collItemTitle:string;
  public collItemImgSrc: string;
  public collItemHandle:string;
  public collItemVariants: any[];
  @Input() set productData(values) {
    
    this.collItemTitle = values.node.title;
    this.collItemImgSrc = values.node.images.edges[0].node.src
    this.collItemHandle = values.node.handle;
    this.collItemVariants = values.node.variants.edges.map(v => {
      let obj = {};
      obj['handle'] = v.node.title.split(' ').join('-');
      obj['id'] = v.node.id;
      return obj
    })

    console.log('these are thevalues', this.collItemTitle , values.node);
    console.log('variants' , );
    
  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
