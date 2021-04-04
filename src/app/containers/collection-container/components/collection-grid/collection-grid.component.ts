import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'collection-grid',
  templateUrl: './collection-grid.component.html',
  styleUrls: ['./collection-grid.component.scss']
})
export class CollectionGridComponent implements OnInit {
  @Input() collectionData:Observable<any>
  
  constructor() { }

  ngOnInit() {
    
  }

}
