import { Component, ViewChild } from '@angular/core';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from './services/cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andle';
  public searchControl: FormControl = new FormControl('');
  public isSearchActive:boolean = false;
  public cartQuantity:string = '0';
  @ViewChild('snav') sidenav:MatSidenav;
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public cartService:CartService,
    public cookieService:CookieService
  ) { 
    this.cartService.getCheckoutDetails(this.cookieService.get('checkoutID')).subscribe(data => {
      this.cartQuantity = data['lineItems']['edges'].reduce((a,b)=>{
        return a + parseInt(b['node']['quantity'])
      }, 0)
      
    })
    this.cartService.cartChange.subscribe(data => {
      console.log('CART HAS CHANGED' , data);
      this.cartQuantity = data;
    })
  }

  onSearch(evt) {

    if(this.searchControl.value.length > 0){
      this.router.navigate(['collections'], { queryParams: { searchQuery: this.searchControl.value } })
      this.sidenav.close()
    }
  }
  setSearchActive(){
    this.isSearchActive = true;
  }

}
