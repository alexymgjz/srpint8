import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WarService} from "../war.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Starship} from "../modelos/startship";
import {fadeIn, fader, stepper} from "../route-animations";


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  animations:[
    fadeIn,fader,stepper
  ]
})


export class DetallesComponent implements OnInit {

  // @ts-ignore
  @ViewChild('asimg') img:ElementRef;
  Starship: Starship | undefined;
  imgExist = false;

  id: number = 0;
  constructor(
    public war:WarService,
    private route: ActivatedRoute,
    private Render2 :Renderer2,
    private router :Router
  ) {
  }

  async ngOnInit()  {
    // @ts-ignore
    this.id = await this.route.snapshot.paramMap.get('id');
    await this.getStarship('' + this.id);
  }

  async getStarship(url:string) {
    let asimg = this.img.nativeElement;
    this.Render2.setAttribute(asimg , 'class','activem' )
    this.Starship = await this.war.getStarships(url);
    // @ts-ignore
    let idArr = this.Starship.url.split("/");
    this.Starship.id = idArr[idArr.length - 2];
  }

 async loadDefault() {
  let asimg = this.img.nativeElement;
  await this.Render2.setAttribute(asimg , 'src','assets/image/big-placeholder.jpg' )

  }

  async goTo() {
     await this.router.navigate(['/list']);
  }

  async goToPilots(pilotos: any) {
  localStorage.setItem('pilotos',pilotos)  ;
   await this.router.navigate(['/pilotos']);
  }



}
