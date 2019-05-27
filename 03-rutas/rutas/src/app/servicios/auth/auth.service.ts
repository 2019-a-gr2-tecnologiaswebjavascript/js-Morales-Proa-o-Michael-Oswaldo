import { Injectable } from '@angular/core';
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
estarLogeado = false;

  constructor(private readonly _router:Router) { }

  login(password: string, usuario : string):boolean{
    if(password === '1234' && usuario === 'Michael'){
      this.estarLogeado = true

      const url = ['/creditos','sadasd','asdasdasd'];
      const params = {
      queryParams:{
        nombre: 'Michael',
          edad: '28'


      }


      }
      this._router.navigate(url,params)


      return this.estarLogeado
    }
    else{

      return false
    }



  }

  logout(){

    this.estarLogeado = false
  }





}
