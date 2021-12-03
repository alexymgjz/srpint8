import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listActive: boolean=false;
  detailsActive: boolean=false;
  homeActive: boolean=false;

  constructor(private route: ActivatedRoute,private router: Router) { }

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

  async goToNaves() {
    await this.router.navigate([`list`]);
  }

}
