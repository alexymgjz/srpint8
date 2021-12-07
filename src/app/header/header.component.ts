import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  // @ts-ignore
  public register: FormGroup;
  // @ts-ignore
  public verificarUsuario: FormGroup;

  constructor(private formBuilder:FormBuilder , public  localStorage:LocalStorageService,) {

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
     if (this.localStorage.checkLogIn(this.verificarUsuario.value.Email, this.verificarUsuario.value.Password)) {
       alert('Ya puedes explorar nuestras naves');
       this.localStorage.autenticado = true
     } else {
       alert('Usuario no valido ;Verifica tu email y tu contraseña o registrate');
     }
   }

 }

  reset() {
    this.verificarUsuario.reset();
    this.register.reset();
  }
}
