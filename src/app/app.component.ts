import { Component, ViewChild } from '@angular/core';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andle';
  public searchControl: FormControl = new FormControl('');
  public isSearchActive:boolean = false;
  @ViewChild('snav') sidenav:MatSidenav;
  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  onSearch(evt) {
    console.log('this is the search', this.searchControl);
    if(this.searchControl.value.length > 0){
      this.router.navigate(['collections'], { queryParams: { searchQuery: this.searchControl.value } })
      this.sidenav.close()
    }
  }
  setSearchActive(){
    this.isSearchActive = true;
  }
}
