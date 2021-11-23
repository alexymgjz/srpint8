import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable, Subject} from "rxjs";

//1 definimos el tipo
 export interface Nave{
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
    } ]
 }


@Injectable({
  providedIn: 'root'
})
export class WarService {
 url:string='https://swapi.dev/api/starships/?page=';
 pagination:number=1;
  frases: {};

   //2 creamos el array del tipo creado en la interfase
    private naves: Nave[];

   //4 creamos el subject usamos el mismo nombre de la variable pero con signo ($) como estandar ;
    // el tipo de subject a emitir en este caso es el array de naves (:Subject<Nave[]>)
    private nave$ :Subject<Nave[]>;

  constructor(private http:HttpClient) {
    //3 inicializamos el array vacio
    this.naves =[];
     this.frases= {};
    //inicializamos o creamos eel subject
    this.nave$ = new Subject();

  }
  getData(){
    let result:any;
    this.http.get(`${this.url} + ${this.pagination}`).subscribe(result => {
          console.log('aaaaaa', result);
          return result;
        },
        error => {
         return [];
        }
      );
  }

  //creamos los servicios
  addNave(pnave:Nave){
  this.naves.push(pnave);

  //notificamos atrevez del subject que ha sucedido un cambio y con el next mandamos de nuevo el array
  this.nave$.next(this.naves);
}

//ahora creamos un observasable para recivirlo en los otros modulos
   addNaves$():Observable<Nave[]>{
     return this.nave$.asObservable();
}


}
