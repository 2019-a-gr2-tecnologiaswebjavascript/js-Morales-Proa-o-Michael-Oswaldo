import {Injectable} from "@angular/core";

@Injectable()
export class carritoService {

  carrito = [
    {
      tienda: 'juanito',
      notas: [],
      valor: 0
    },
    {
      tienda: 'pepito',
      notas: [],
      valor: 0
    }, {

      tienda: 'maria',
      notas: [],
      valor: 0
    }


  ];
  carritoCompras = [];


  agregarItemCarrito(tienda: String, itemCarrito: String) {

    //logica para agregar al carrito





}
