import {Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WarService} from '../war.service';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../local-storage.service";
import {DOCUMENT} from "@angular/common";
import {DatosTotalesI} from "../modelos/datos-totales-i";
import {round} from "@popperjs/core/lib/utils/math";
import {fadeIn, fader, stepper} from "../route-animations";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations:[
    fadeIn,fader,stepper
  ]
})

export class ListComponent implements OnInit {
  showButton = false;
  public screenHeight: any;
  pageActual = 1;
  totalPages = 1;
  public datos = {} as DatosTotalesI
  // @ts-ignore
  @ViewChild('list') list:ElementRef;



  constructor(@Inject(DOCUMENT) private document :Document,
              public war:WarService,
              public localStorage:LocalStorageService,
              private  route: ActivatedRoute,
              private Render2 :Renderer2,
              private router: Router) {
}




  ngOnInit() {
    this.war.getData('https://swapi.py4e.com/api/starships/?page=1').subscribe(data => {
     this.datos = data;
     this.totalPages = round(Number(this.datos.count)/10);
    })
    this.getHeight();

  }


 async goTO(url:string) {
   await this.router.navigate([`detalles/`, url]);
 }




  getHeight(){
    this.screenHeight = window.innerHeight - 230;
/*    this.Render2.setAttribute(this.list.nativeElement , 'Height',this.screenHeight + 'xp' )*/
    console.log( this.screenHeight + 'xp' +' Esta es la altura de nuestra página ;creada para hacer scroll');
  }

  @HostListener('window:scroll')
  onScroll():void{
    const yOffSet = window.pageYOffset;//!* obtenemos el numero de pixeles verticales cuando se hace el scrol*!/
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop)<30;
    if ( yOffSet>0  || scrollTop > 0){
      //this.document.documentElement.scrollTop=0;
    }
  }

  next() {
    if(this.pageActual < this.totalPages){
      this.war.getData(this.datos.next).subscribe(data => {
        this.datos = data;
        this.pageActual++;
      })
    }
  }


  prev() {
    if(this.pageActual > 1){
      this.war.getData(this.datos.previous).subscribe(data => {
        this.datos = data;
        this.pageActual--;
      });
    }
    }
 }
