import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-crear-comida',
  templateUrl: './ruta-crear-comida.component.html',
  styleUrls: ['./ruta-crear-comida.component.scss'],
})
export class RutaCrearComidaComponent implements OnInit {
  nombre:string = "";
  descripcion:string ="";
  nacionalidad:string = "";
  numeroPersonas:string = "";
  public esPicante:boolean;
  constructor(

  ) {this.esPicante = false}

  ngOnInit() {}

  crearComida(){
    console.log(this.nombre)
    console.log(this.descripcion)
    console.log(this.nacionalidad)
    console.log(this.numeroPersonas)
    console.log(this.esPicante)
  }

}
