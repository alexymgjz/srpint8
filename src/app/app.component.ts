import {Component} from '@angular/core';
import {WarService} from "./war.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sprint8';
  constructor (public war:WarService){}


  onScroll() {
    console.log('scrolled!!');
    /*this.war.next()*/ //uncoment for infinit scroll
  }
}
