import { Injectable } from '@angular/core';
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";


@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  carritoCompras = [];
  constructor() { }




  agregarCarritoCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras [] {
    let indiceItem = -1
    const identificador = itemCarrito.titulo;
    const existeElItem = this.carritoCompras.some((item: ItemCarritoCompras,indice) => {

      if (item.titulo == identificador) {
        indiceItem = indice
        return true
      } else {
        return false
      }
    })
    if (existeElItem) {
      this.añadirAlContador(indiceItem)
      console.log('Se añadio al carriotp ')
    }
    else {

      this.añadirAlCarrito(itemCarrito)
    }

    console.log('se añadio al carrito',itemCarrito)
    return this.carritoCompras
  }
  private añadirAlContador(indice:number) {
    this.carritoCompras[indice].cantidad++;


  }
  private  añadirAlCarrito(item:ItemCarritoCompras){
    item.cantidad= 1;
    this.carritoCompras.splice(0,0,item)
    ;
  }




}
