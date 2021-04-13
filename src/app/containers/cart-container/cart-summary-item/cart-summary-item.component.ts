  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary-item',
  templateUrl: './cart-summary-item.component.html',
  styleUrls: ['./cart-summary-item.component.scss']
})
export class CartSummaryItemComponent implements OnInit {
  public cartItem;
  constructor() { }

  ngOnInit(): void {
  }

}
