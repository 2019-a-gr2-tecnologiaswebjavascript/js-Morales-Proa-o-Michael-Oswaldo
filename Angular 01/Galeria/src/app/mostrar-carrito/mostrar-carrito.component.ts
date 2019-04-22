import { Component, OnInit } from '@angular/core';
import {carritoService} from "../servicios/carrito/carrito.service";

@Component({
  selector: 'app-mostrar-carrito',
  templateUrl: './mostrar-carrito.component.html',
  styleUrls: ['./mostrar-carrito.component.css']
})
export class MostrarCarritoComponent implements OnInit {

  constructor(private readonly _carritoService:carritoService) {



  }

  ngOnInit() {
  }

}
