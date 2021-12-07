import {Component, OnInit} from '@angular/core';
import {WarService} from '../war.service';
import {DatosTotalesI} from '../modelos/datos-totales-i';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos = {} as DatosTotalesI


  constructor(public war:WarService, public  localStorage:LocalStorageService,private  route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    this.war.getData().subscribe(data => {
     this.datos = data;
    })
  }


 async goTO(url:string) {
   await this.router.navigate([`detalles/`, url]);
 }

  next() {
    if (this.war.page>=1)
    this.war.page++

    this.war.getData().subscribe(data => {
      this.datos = data;
    })
  }
  prev() {
    if (this.war.page>1)
      this.war.page--

    this.war.getData().subscribe(data => {
      this.datos = data;
    })
  }

}
