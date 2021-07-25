import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'collection-grid',
  templateUrl: './collection-grid.component.html',
  styleUrls: ['./collection-grid.component.scss']
})
export class CollectionGridComponent implements OnInit {
  @Input() collectionData:Observable<any>
  @Output() onAtcClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  onAddToCart(evt){
    this.onAtcClicked.emit(evt)
  }
}
