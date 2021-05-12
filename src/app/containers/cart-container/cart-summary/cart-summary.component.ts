import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

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
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.subtotal = 800;
    this.shipping = 40;
    this.estimatedTax = 50;
    this.total = 9000;
  }
  public onGoToCheckoutClicked(){
    this.customerService.goToCheckout();
  }

}
