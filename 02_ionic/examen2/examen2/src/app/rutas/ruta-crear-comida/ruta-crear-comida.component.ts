import { Component, OnInit } from '@angular/core';
import {Comida} from "../../dto/Comida";
import {ComidaHttpService} from "../../services/http/HttpComida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-comida',
  templateUrl: './ruta-crear-comida.component.html',
  styleUrls: ['./ruta-crear-comida.component.scss'],
})
export class RutaCrearComidaComponent implements OnInit {


  comida:Comida = {nombre:'',descripcion:'',nacionalidad:'',numeroPersonas:null,picante:false}


  constructor( private readonly httpComida:ComidaHttpService,
               private readonly _route:Router
  ) {this.comida.picante = false}

  ngOnInit(

  ) {}

  crearComida(){
    console.log(this.comida.nombre)
    console.log(this.comida.descripcion)
    console.log(this.comida.nacionalidad)
    console.log(this.comida.numeroPersonas)
    console.log(this.comida.picante)
    this.httpComida.crear(this.comida).subscribe(
        (dato)=>{
          console.log(dato)
          const url = ['/tabs']
          this._route.navigate(url)
        },
        (error)=>{
          console.log(error)
        }

    )



  }

}
