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
  @Input() set productData(values) {
    this.collItemTitle = values.node.title;
    this.collItemImgSrc = values.node.images.edges[0].node.src
    this.collItemHandle = values.node.handle;
  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
