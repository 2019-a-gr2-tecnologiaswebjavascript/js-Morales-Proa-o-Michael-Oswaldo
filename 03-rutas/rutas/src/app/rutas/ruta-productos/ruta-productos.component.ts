import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.css']
})
export class RutaProductosComponent implements OnInit {
rutaProductosHogar = ['/productos','tecnologia']
  rutaProductosDomesticos = ['/productos','domesticos']
  constructor() { }

  ngOnInit() {
  }

}
