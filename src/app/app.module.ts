import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PilotsComponent } from './pilots/pilots.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetallesComponent,
    HomeComponent,
    HeaderComponent,
    PilotsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
