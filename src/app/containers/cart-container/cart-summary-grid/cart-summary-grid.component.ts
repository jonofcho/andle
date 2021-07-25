import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-summary-grid',
  templateUrl: './cart-summary-grid.component.html',
  styleUrls: ['./cart-summary-grid.component.scss']
})
export class CartSummaryGridComponent implements OnInit {
  @Input() public checkoutList
  @Output() quantityUpdateChange: EventEmitter<any> = new EventEmitter();
  @Output() lineItemRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.checkoutList){
      console.log('this is checkoutList ' , this.checkoutList)
    }
  }

  public onQuantityUpdateChange(evt){;
    
    console.log('grid fired' , evt);
    console.log('this is the list' , this.checkoutList);
    
    
    this.quantityUpdateChange.emit(evt);
  }  

  public onLineItemRemove(evt){
    this.lineItemRemove.emit(evt)
  }


}
