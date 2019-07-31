import {Component, OnInit} from '@angular/core';
import {Comida} from "../dto/Comida";
import {ComidaHttpService} from "../services/http/HttpComida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaComida:Comida[] = [];
  textoBusqueda:string = "";


  constructor(private readonly _route:Router,
      private readonly httpComida:ComidaHttpService) {
  }

    ngOnInit(){
        this.actualizarListaComida();
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
  buscarComida(){

    this.httpComida.buscarQuery(`where={"nombre":{"contains":"${this.textoBusqueda}"}}`).subscribe(
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

  borrar(id:number){
      this.httpComida.borrar(id).subscribe(
          (dato)=>{
              console.log(dato)
              this.actualizarListaComida()
          },
      (error)=>{
              console.log(error)
      }

      )


  }

  irAIngredientes(id:number){
      const url = ['/Comida',id,'Ingredientes']
      this._route.navigate(url)
  }





}
