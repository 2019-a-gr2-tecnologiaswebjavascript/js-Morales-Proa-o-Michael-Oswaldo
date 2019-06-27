import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
estaLogeado = false;
  constructor() { }


login(correo:string, contrasenia:string){
    if(correo === 'm.m@m.m' && contrasenia == '123' ){

      this.estaLogeado = true;
      return this.estaLogeado
    }



}



}
