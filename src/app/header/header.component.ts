import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LocalStorageService} from "../local-storage.service";
import {fadeIn} from "../route-animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    fadeIn
  ]
})
export class HeaderComponent implements OnInit {
// @ts-ignore
  @ViewChild('log') log:ElementRef;
  // @ts-ignore
  public register: FormGroup;
  // @ts-ignore
  public verificarUsuario: FormGroup;

  constructor(private formBuilder:FormBuilder , public  localStorage:LocalStorageService,private Render2 :Renderer2,) {

  }

  ngOnInit(): void {
    this.register= this.formBuilder.group({
      Email : '' ,
      Password :'',
      RepeatPassword : '',
    })
      this.verificarUsuario= this.formBuilder.group({
      Email : '' ,
      Password :'',

    })
  }

  singUp() {

    if (this.register.value.Password == this.register.value.RepeatPassword && this.register.value.Password != '' && this.register.value.email != '' ){
     this.localStorage.restartStorage(this.register.value);
     this.localStorage.autenticado=true;
     }

  }

  login(){

    if (this.verificarUsuario.value.Password != '' && this.verificarUsuario.value.email != '') {
      console.log(this.verificarUsuario.value.Email, this.verificarUsuario.value.Password)
      if (this.localStorage.checkLogIn(this.verificarUsuario.value.Email, this.verificarUsuario.value.Password)) {
       console.log(this.verificarUsuario.value.Email);
        alert('Ya puedes explorar nuestras naves');
        this.localStorage.autenticado = true;
      } else if (!this.localStorage.autenticado){
        alert('Usuario no valido ;Verifica tu email y tu contraseña o registrate');
      }
    }



 }

  reset() {
    this.verificarUsuario.reset();
    this.register.reset();
  }

  logout() {
   /*  let text = "Are you sure ,you want to LOG OUT?";
      if (confirm(text) == true) {*/

        this.localStorage.autenticado=false;
      }



}
