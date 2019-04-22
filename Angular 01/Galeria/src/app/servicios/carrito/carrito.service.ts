import {Injectable} from "@angular/core";
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";

@Injectable()
export class carritoService {


  carritoCompras:ItemCarritoCompras[] = [];

  agregarCarritoCompras(itemCarrito : ItemCarritoCompras): ItemCarritoCompras []{

  const identificador = itemCarrito.valor;
let indiceItem = -1;
  const existeElItem = this.carritoCompras
    .some(
      (item: ItemCarritoCompras, indice)=>{
        if( item.valor == identificador){
          indiceItem = indice;
        }
        else{
          return false;
        }


      }
    )


    if(){

    }
      else{

    }
  return[];
  }
}
