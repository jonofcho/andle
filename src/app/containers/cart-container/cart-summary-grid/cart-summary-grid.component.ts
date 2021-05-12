import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary-grid',
  templateUrl: './cart-summary-grid.component.html',
  styleUrls: ['./cart-summary-grid.component.scss']
})
export class CartSummaryGridComponent implements OnInit {
  @Input() public checkoutList
  constructor() { }

  ngOnInit(): void {
    console.log(this.checkoutList)
  }

}
