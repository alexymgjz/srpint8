import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listActive: boolean=false;
  detailsActive: boolean=false;
  homeActive: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  home() {
    this.homeActive = true;
    this.detailsActive = false;
    this.listActive = false;
  }
  details() {
    this.homeActive = false;
    this.detailsActive = true;
    this.listActive = false;
  }
  list() {
    this.homeActive = false;
    this.detailsActive = false;
    this.listActive = true;
  }
}
