import { Component } from '@angular/core';
import {Comida} from "../dto/Comida";
import {ComidaHttpService} from "../services/http/HttpComida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaComida:Comida[] = [];
  textoBusqueda:string = "";


  constructor(private readonly _route:Router,
      private readonly httpComida:ComidaHttpService) {
  }

  ionViewWillEnter() {
    console.log("Se ve!!!");
    this.actualizarListaComida();
  }

  actualizarListaComida(){
    this.httpComida.buscarTodos().subscribe(
        (datos)=>{
          this.listaComida = datos
          console.log(datos)},
        (error)=>{console.log(error)},
        ()=>{console.log("datos actualizados")}
    )

  }
  buscarComida(textoBuscar:string){

    this.httpComida.buscarQuery(`where={"nombre":{"contains":"${textoBuscar}"}}`).subscribe(
        (dato)=>{
          console.log(dato)
          this.listaComida =dato
        },
        (error)=>{
          console.log(error)
        }
    )
  }


    irCrearComida(){
    const url = ['/Comida','Crear']
    this._route.navigate(url)
  }

/*
  crearComida(comida: Comida){

    this.httpComida.crear(comida).subscribe(
        (datos)=>{console.log(datos)},
        (error)=>{console.log(error)},
        ()=>{this.actualizarListaComida()}
    )






  }
*/


}
