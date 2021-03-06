import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {DetallesComponent} from "./detalles/detalles.component";
import {PilotsComponent} from "./pilots/pilots.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent  ,
  },
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'list' , component: ListComponent
  },

  {
    path: 'detalles/:id' , component: DetallesComponent
  },

  {
    path: 'pilotos' , component: PilotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
