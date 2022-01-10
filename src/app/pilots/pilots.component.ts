import { Component, OnInit } from '@angular/core';
import {WarService} from "../war.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PilotoI} from "../modelos/piloto";
import {fadeIn, fader, stepper} from "../route-animations";


@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss'],
  animations:[
    fadeIn,fader,stepper
  ]
})
export class PilotsComponent implements OnInit {
  pilotos:any;
  pilots: any;
  localStorage = localStorage.getItem('pilotos');

  constructor(public war:WarService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  async ngOnInit(){
     this.pilots = this.war.getPilotsData();
  }


  async goTo() {
    await this.router.navigate(['/list']);
  }
}
