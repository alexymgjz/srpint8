import { Component, OnInit } from '@angular/core';
import {DataTotalI, WarService} from '../war.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos = {} as DataTotalI
  Starship = {} as DataTotalI

  constructor(public war:WarService) {

  }

  ngOnInit() {
    this.war.getData(1).subscribe(data => {
     this.datos = data;
    })
  }

  getStarship(i: number) {
   this.war.getStarships(i).subscribe(data => {
      this.Starship = data;
    })
    console.log(this.war.shipsUrl+i)
    console.log(this.Starship.results)
  }
}
