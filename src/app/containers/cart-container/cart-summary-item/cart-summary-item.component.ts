  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart-summary-item',
  templateUrl: './cart-summary-item.component.html',
  styleUrls: ['./cart-summary-item.component.scss']
})
export class CartSummaryItemComponent implements OnInit {
  @Input() public checkoutItem;
  @Output() quantityUpdateChange: EventEmitter<any> = new EventEmitter();

  constructor() { }
  public quantity;
  ngOnInit(): void {
    console.log('this is the checkoutItem' , this.checkoutItem);
    console.log(this.checkoutItem.node.quantity);
    
    if(this.checkoutItem){
      this.quantity = this.checkoutItem.node.quantity.toString()
    }
    
  }
  public emitQuantityUpdate(){
    console.log('this is the checkout item' , this.checkoutItem);
    let updateObj = {
      lineId: this.checkoutItem.node.id,
      variantId: this.checkoutItem.node.variant.id,
      quantity: this.quantity
    }
    this.quantityUpdateChange.emit(updateObj)
  }

}
