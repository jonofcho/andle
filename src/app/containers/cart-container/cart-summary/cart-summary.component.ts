import { Component, OnInit, Input } from '@angular/core';
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
  @Input() set checkoutSummaryDetails(values) {
    console.log('checkout details' , values);
    if(values){
      this.subtotal = values['subtotalPrice'];
      this.estimatedTax = values['totalTax'];
      this.total = values['totalPrice'];
    }
  };
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  public onGoToCheckoutClicked(){
    this.customerService.goToCheckout();
  }

}
