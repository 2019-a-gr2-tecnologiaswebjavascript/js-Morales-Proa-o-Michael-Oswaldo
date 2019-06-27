import {Component, OnInit} from '@angular/core';
import {carritoService} from "./servicios/carrito/carrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{




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
      notas:[
        {
          producto:'papitas',
          id:1
        },
        {
          producto:'Empanadas',
          id:2
        },
        {
          producto:'Ensalada',
          id:3
        }


      ]
    }
    ,
    {
      titulo: 'Pepito',
      raza: 'gran Danes',
      tamanio: 'Grandote',
      notas:[
        {
          producto:'Hot Dog',
          id:4
        },
        {
          producto:'Hamburger',
          id:5
        },
        {
          producto:'Ensalada',
          id:6
        }


      ]
    },
    {
      titulo: 'Maria',
      raza: 'Zorro',
      tamanio: 'Grandoteeee',
      notas:[
        {
          producto:'Bonice',
          id:7
        },
        {
          producto:'Yogozo',
          id:8
        },
        {
          producto:'Ensalada',
          id:9
        }


      ]

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
  interpolacion: any;





  constructor(private readonly _carritoService: carritoService){



  }




  ngOnInit(){
    this._carritoService.actualizarCarrito()

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


