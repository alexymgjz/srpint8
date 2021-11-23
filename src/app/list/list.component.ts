import { Component, OnInit } from '@angular/core';
import {WarService} from '../war.service';
export interface datosParaVistaI{
  "name": string,
  "model": string
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos:any;
  constructor(public war:WarService) {

  }

  ngOnInit() {
    this.war.getData(1).subscribe(data => {
     this.datos = data
     console.log(this.datos.result);
    })
  }

}
