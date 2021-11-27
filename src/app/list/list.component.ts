import { Component, OnInit } from '@angular/core';
import {WarService} from '../war.service';
import {DatosTotalesI} from '../modelos/datos-totales-i';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos = {} as DatosTotalesI


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
