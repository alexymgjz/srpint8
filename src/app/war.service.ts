import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {StarshipI} from './modelos/startship-i';
import{DatosTotalesI} from './modelos/datos-totales-i';


@Injectable({
  providedIn: 'root'
})
export class WarService {
 url:string='https://swapi.dev/api/starships/?page=';
 page:number=1;




  constructor(private http:HttpClient) { }


  getData():Observable<DatosTotalesI>{
    return this.http.get<DatosTotalesI>(`${this.url} + ${this.page}`)
  }


  async getStarships(url:string) {
    return await this.http.get<StarshipI>(url).toPromise();
  }
}
