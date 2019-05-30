import {Component, Input, OnInit} from '@angular/core';
import {CarritoComprasService} from "../servicios/carrito_compras/carrito-compras.service";
import {ItemCarritoCompras} from "../interfaces/item-carrito-compras";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(private readonly _carritoService: CarritoComprasService) { }
@Input()
srcText;

  @Input()
  titulo;
  @Input()
  autor;
  @Input()
  idioma;

  @Input()
  precio;




  ngOnInit() {
  }


  agregarAlCarrito(){
const itemCarrito:ItemCarritoCompras = {
  titulo : this.titulo,
  autor:this.autor,
  idioma:this.idioma,
  precio:this.precio,
  imagen:this.srcText,
    };

console.log(itemCarrito)

    const respuesta = this._carritoService.agregarCarritoCompras(itemCarrito);
    console.log(respuesta)

  }

}
