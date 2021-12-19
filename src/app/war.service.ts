import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {StarshipI} from './modelos/startship-i';
import{DatosTotalesI} from './modelos/datos-totales-i';


@Injectable({
  providedIn: 'root'
})
export class WarService {
 url:string='https://swapi.py4e.com/api/starships/?page=';
 page:number=1;

  datos = {} as DatosTotalesI


  constructor(private http:HttpClient) { }


  getData():Observable<DatosTotalesI>{
    return this.http.get<DatosTotalesI>(`${this.url} + ${this.page}`)
  }


  async getStarships(url:string) {
    return await this.http.get<StarshipI>(url).toPromise();
  }

 next() {

  let promedio = Math.round((Number(this.datos.count))/10)
    if (this.page <= promedio){
      this.getData().subscribe(data => {
        this.datos = data;
        this.page++
      })
    }else this.page=1;

    }



  prev() {
    if ( this.page >= 2)
      this.page--

    this.getData().subscribe(data => {
      this.datos = data;
    })

  }


}
