import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WarService} from "../war.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StarshipI} from '../modelos/startship-i';
import {BehaviorSubject} from "rxjs";
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
    private Render2 :Renderer2
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
    this.Starship.id = idArr[idArr.length - 2]

    //this.Starship.next(promiseStarship);
    // console.log('aaaaaaaa111111');
    // console.log(this.Starship);
    // console.log('aaaaaaaa111111');

    // promiseStarship.subscribe(data => {
    //   this.Starship = data;
    //   let idArr = data.url.split("/");
      //this.Starship.id = idArr[idArr.length - 2]
     // })
  }

 async loadDefault() {
  console.log('assdasdasdas')

  let asimg = this.img.nativeElement;
  await this.Render2.setAttribute(asimg , 'src','assets/image/big-placeholder.jpg' )

  }
}
