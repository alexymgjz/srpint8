import {Component, ElementRef, HostListener, Inject, NgModule, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WarService} from '../war.service';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../local-storage.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  showButton = false;
  public screenHeight: any;
  // @ts-ignore
  @ViewChild('list') list:ElementRef;


  constructor(@Inject(DOCUMENT) private document :Document,
              public war:WarService,
              public localStorage:LocalStorageService,
              private  route: ActivatedRoute,
              private Render2 :Renderer2,
              private router: Router) {}

  /*   @HostListener('mousewheel', ['$event'])
    scroll(event: MouseEvent) {
      console.log("Entered mouse wheel
  /*    let wheelDelta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
      if(wheelDelta > 0) {
        factor = 0.5;
      }else {
        factor = 2.0;
      }

      this.initPointX = event.PageX;
      this.initPointY = event.PageY;
  }*/

  ngOnInit() {
    this.war.getData().subscribe(data => {
     this.war.datos = data;
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
    const yOffSet = window.pageYOffset;/* obtenemos el numero de pixeles verticales cuando se hace el scrol*/
    const scrollTop = this.document.documentElement.scrollTop;
    // console.log('yOffSet'+ yOffSet + '//' +'scrollTop' + scrollTop )
    this.showButton = (yOffSet || scrollTop)<30;


    // podemos hacer el scroll infinito con este codigo pero podemos usar una  de angular
     if ( yOffSet>0  || scrollTop > 0){
       this.war.next()
       if (this.war.page > 5){

         this.war.page=1;
         this.war.next()
       }

 }

  }

  // npm install ngx-infinite-scroll --save
}
