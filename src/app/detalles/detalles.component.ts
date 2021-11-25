import { Component, OnInit } from '@angular/core';
import {DataTotalI, WarService} from "../war.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

export interface StarshipI{
  "name": string,
  "model": string,
  "manufacturer":string,
  "cost_in_credits": string,
  "length": string,
  "max_atmosphering_speed": string,
  "crew": string,
  "passengers": string,
  "cargo_capacity":string,
  "consumables": string,
  "hyperdrive_rating": string,
  "MGLT": string,
  "starship_class": string,
  "pilots": string[],
  "films": string [],
  "created": string,
  "edited": string,
  "url": string
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  Starship = {} as StarshipI
  id: number = 0;
  constructor(public war:WarService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.id = params.get(`id`);
      this.getStarship(`${this.id}`)
    });
  }

  getStarship(url:string) {
    this.war.getStarships(url).subscribe(data => {
      this.Starship = data;
      console.log(this.Starship);
    })

  }

}
