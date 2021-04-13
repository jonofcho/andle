import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  public subtotal;
  public shipping;
  public estimatedTax;
  public total;
  constructor() { }

  ngOnInit(): void {
    this.subtotal = 800;
    this.shipping = 40;
    this.estimatedTax = 50;
    this.total = 9000;
  }

}
