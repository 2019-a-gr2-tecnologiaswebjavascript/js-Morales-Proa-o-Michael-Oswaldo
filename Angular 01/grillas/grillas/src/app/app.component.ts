import { Component } from '@angular/core';
import {EstaLogeadoServiceService} from "./servicios/auth/esta-logeado-service.service";
import {AuthService} from './servicios/login/auth.service';
import {CarritoComprasService} from "./servicios/carrito_compras/carrito-compras.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grillas';


  constructor(private readonly _auth: AuthService, private readonly _carritoService:CarritoComprasService){

  }
  ngOnInit(){

console.log('new instance')
  }
  estaLogeado():boolean {
    return this._auth.estaLogeado

  }

  deslogear(){
    this._auth.estaLogeado = false

  }

  mostrarCarrito(){

    const carrito = this._carritoService.carritoCompras


  }


}
