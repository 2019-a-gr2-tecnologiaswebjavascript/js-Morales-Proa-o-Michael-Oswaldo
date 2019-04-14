import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria'
  colorCambio = 'rojo'

arregloPerros = [new Perro('pitbull','grande'),
new Perro('Gran danes','Grande')]



  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];
arregloPerrosJs=[
  {
    raza:'pitbull',
    tamanio:'grande'


  }
    ,
  {
    raza: 'gran Danes',
    tamanio: 'Grandote'

  },
  {
    raza:'Zorro',
    tamanio:'Grandoteeee'

  }


]
  arregloFloresJs = [
    {
      nombre:"Papitas",
      descripcion:"A lo bestia",
      // dato:1,
      // dato1:1.1,
      // dato3:" asdasd ",
      // dato4:false,
      // dato5:true,
      // dato6:null
    },
    {
      nombre:"Carnitas",
      descripcion:"Gorditas"
    },
    {
      nombre:"Chicas",
      descripcion:"Cheveres"
    }
  ]


  cambioChela(evento:boolean){

   this.colorCambio = 'verde'



  }

  cambioCerveza(evento:boolean){
    this.colorCambio='amarillo'

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


