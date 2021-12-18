import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WarService} from "../war.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Starship} from "../modelos/startship";


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})


export class DetallesComponent implements OnInit {

  // @ts-ignore
  @ViewChild('asimg') img:ElementRef;
  Starship: Starship | undefined;

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
}
