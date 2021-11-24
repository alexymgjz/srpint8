import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";


//1 definimos el tipo
 export interface DataTotalI{
   "count":number,
   "next": string,
   "previous": string,
   "results": [{
       "name": string,
       "model": string,
       "manufacturer": string,
       "cost_in_credits": string,
       "length": string,
       "max_atmosphering_speed":string,
       "crew": string,
       "passengers": string,
       "cargo_capacity": string,
       "consumables": string,
       "hyperdrive_rating": string,
       "MGLT": string,
       "starship_class": string,
       "pilots": [],
       "films": [url:string],
       "created": string,
       "edited": string,
       "url": string
    } ],
   "created": string,
   "edited": string,
   "url": string
 }


@Injectable({
  providedIn: 'root'
})
export class WarService {
 url:string='https://swapi.dev/api/starships/?page=';
 shipsUrl:string='https://swapi.dev/api/starships/';



  constructor(private http:HttpClient) { }


  getData(page:number):Observable<DataTotalI>{
    return this.http.get<DataTotalI>(`${this.url} + ${page}`)
  }


  getStarships(i:number) {
    return this.http.get<DataTotalI>(`${this.shipsUrl} + ${i}`)
  }
}
