import { Component, OnInit } from '@angular/core';
import {DataTotalI, WarService} from '../war.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos = {} as DataTotalI


  constructor(public war:WarService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    this.war.getData(1).subscribe(data => {
     this.datos = data;
    })
  }


 async goTO(url:string) {
   await this.router.navigate([`detalles/`, url]);
  }
}
