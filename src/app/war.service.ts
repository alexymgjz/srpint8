import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {StarshipI} from './modelos/startship-i';
import{DatosTotalesI} from './modelos/datos-totales-i';
import{PilotoI} from './modelos/piloto';


@Injectable({
  providedIn: 'root'
})
export class WarService {
 private url: string = 'https://swapi.py4e.com/api/starships/?page=1';
 private pilotObject: Object = {} as PilotoI;
 private datos = {} as DatosTotalesI;


  constructor(private http: HttpClient) {

  }


  getData(url:string): Observable<DatosTotalesI> {
    return this.http.get<DatosTotalesI>(url)
  }

  async getStarships(url: string) {
    return await this.http.get<StarshipI>(url).toPromise();
  }

  getPilotsData() {
    if (localStorage.getItem('pilotos')!= ''){
      let pilotos = localStorage.getItem('pilotos');
      // @ts-ignore
      let pilotosArr =  pilotos.split(',');
      let pilotArrayObject:[]=[];

      if (pilotosArr.length != 0) {
        // @ts-ignore
        for (const piloto of pilotosArr) {
          this.http.get<PilotoI>(piloto).subscribe(data => {
            this.pilotObject= data;
            // @ts-ignore
            pilotArrayObject.push(this.pilotObject);

          });
        }
      }
      return pilotArrayObject;
    }
      return 'no value'
    }

  prev(url:string) {
    this.getData(url).subscribe(data => {
     return   this.datos = data;
    })

  }
}
