import {Component, Input, OnInit} from '@angular/core';
import {CarritoComprasService} from "../../servicios/carrito_compras/carrito-compras.service";
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";

@Component({
  selector: 'app-ruta-mostrar-carrito',
  templateUrl: './ruta-mostrar-carrito.component.html',
  styleUrls: ['./ruta-mostrar-carrito.component.css']
})
export class RutaMostrarCarritoComponent implements OnInit {

  constructor(private readonly _carritoService:CarritoComprasService) { }

  valoresCarro = [];
  ngOnInit() {
    this.valoresCarro = this._carritoService.carritoCompras
    console.log(this.valoresCarro)
    console.log('asdasdasdasdasdsaddasdasdasds')
    console.log(this._carritoService.carritoCompras)
  }

  obtenerCarro(){

 //   const valoresCarro = this._carritoService.carritoCompras

    console.log(this.valoresCarro)
    //return valoresCarro;
  }




}
