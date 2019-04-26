import { Component } from '@angular/core';
import {carritoService} from "./servicios/carrito/carrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  colorCambio = 'rojo';
  estaMostrando = true;

  arregloPerros = [new Perro('pitbull', 'grande'),
    new Perro('Gran danes', 'Grande')]


  arregloFlores = [
    new Flor("Papitas", "A lo bestia"),
    new Flor("Carnitas", "Gorditas"),
    new Flor("Chicas", "Cheveres")
  ];
  arregloPerrosJs = [
    {
      titulo: 'Juanito',
      raza: 'pitbull',
      tamanio: 'grande',
      notas:['papitas', 'Empanadas','Ensalada']
    }
    ,
    {
      titulo: 'Pepito',
      raza: 'gran Danes',
      tamanio: 'Grandote',
      notas:['Hot Dog', 'Hamburger','Ensalada']
    },
    {
      titulo: 'Maria',
      raza: 'Zorro',
      tamanio: 'Grandoteeee',
      notas:['Bonice', 'Yogozo','Ensalada']
    }
  ]
  arregloFloresJs = [
    {
      nombre: "Papitas",
      descripcion: "A lo bestia",



      // dato:1,
      // dato1:1.1,
      // dato3:" asdasd ",
      // dato4:false,
      // dato5:true,
      // dato6:null
    },
    {

      nombre: "Carnitas",
      descripcion: "Gorditas"
    },
    {
      nombre: "Chicas",
      descripcion: "Cheveres"

    }
  ]



  constructor(private readonly _carritoService: carritoService){



  }

  cambioChela(evento: boolean) {

    this.colorCambio = 'verde'


  }

  cambioCerveza(evento: boolean) {
    this.colorCambio = 'amarillo'

  }

  Mostrar(estaMostrando: boolean) {
    this.estaMostrando = estaMostrando;


  }
}






class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}

class Perro{
  constructor(public raza: string,
              public tamanio: string){

  }
}


