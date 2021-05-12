  import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary-item',
  templateUrl: './cart-summary-item.component.html',
  styleUrls: ['./cart-summary-item.component.scss']
})
export class CartSummaryItemComponent implements OnInit {
  @Input() public checkoutItem;
  constructor() { }

  ngOnInit(): void {
  
    
  }

}
