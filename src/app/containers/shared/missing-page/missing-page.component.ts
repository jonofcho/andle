import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missing-page',
  templateUrl: './missing-page.component.html',
  styleUrls: ['./missing-page.component.scss']
})
export class MissingPageComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit(): void {
  }

  public returnToPrevPage(){
    this.location.back()
  }

}
