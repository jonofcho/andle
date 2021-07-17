import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  public imageArr;
  @Input() images
  constructor() { }

  ngOnInit() {
    console.log('These are the images' , this.images);
    
  }

}
