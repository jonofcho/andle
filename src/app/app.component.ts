import { Component } from '@angular/core';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andle';
  public searchControl: FormControl = new FormControl('');;
  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }
  public openAbout() {
    const dialogRef = this.dialog.open(AboutUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSearch(evt) {
    console.log('this is the search', this.searchControl);

    this.router.navigate(['collections'], { queryParams: { searchQuery: this.searchControl.value } })
  }
}
