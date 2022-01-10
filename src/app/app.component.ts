import {Component} from '@angular/core';
import {WarService} from "./war.service";
import {fader ,stepper ,slider,transformer} from "./route-animations";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'sprint8';
  constructor (public war:WarService){}



}
