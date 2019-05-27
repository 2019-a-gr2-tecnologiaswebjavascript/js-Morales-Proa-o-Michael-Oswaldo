import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate{

  constructor(private readonly _authService: AuthService,
              private readonly _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Entrando a verificar si tienes permisos')

    const estaLogeado = this._authService.estarLogeado
    console.log('estaLogeado:',estaLogeado)
    if(estaLogeado){
      console.log('Bienvenido')
    }else{
      console.log('Np estas Logeado')
      const url = ['/home','app']

      this._router.navigate(url)

    }
    return estaLogeado;
  }
}
