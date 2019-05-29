import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../login/auth.service";


@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoServiceService implements CanActivate {

  constructor(private readonly _authService: AuthService,
              private readonly _router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Entrando a verificar si tienes permisos')

    const estaLogeado = this._authService.estaLogeado
    return estaLogeado;
  }
}
