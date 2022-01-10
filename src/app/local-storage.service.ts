import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
interface verifyProfileI {

}
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  profile = 'profile';
  verifyProfile = {} as verifyProfileI;
  autenticado: boolean=false;

  constructor() {
  }

  restartStorage(register?: FormBuilder) {
   localStorage.setItem(this.profile, JSON.stringify(register))
 }

  checkLogIn(user:string , password:string){
    // @ts-ignore
    const actual = JSON.parse(localStorage.getItem(this.profile));
    return user === actual.Email && password === actual.Password;

  }
}
