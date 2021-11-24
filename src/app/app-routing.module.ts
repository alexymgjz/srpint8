import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {DetallesComponent} from "./detalles/detalles.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent  ,
  },

  {
    path: 'list' , component: ListComponent ,
  },
  {
    path: 'detalles' , component: DetallesComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
