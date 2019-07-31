import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IngredienteHttpService} from "../../services/http/HttpIngrediente";
import {Ingrediente} from "../../dto/Ingrediente";
import {ComidaHttpService} from "../../services/http/HttpComida.service";

@Component({
  selector: 'app-ruta-ingrediente-comida',
  templateUrl: './ruta-ingrediente-comida.component.html',
  styleUrls: ['./ruta-ingrediente-comida.component.scss'],
})
export class RutaIngredienteComidaComponent implements OnInit {

  listaIngredientes:Ingrediente[] = [];
  nombre:string
    idCurrent:number
  textoBusqueda:string = ""
      menu = ['/tabs'];

  constructor(private readonly _activatedRoute:ActivatedRoute,
              private readonly  httpIngrediente:IngredienteHttpService,
              private readonly httpComida:ComidaHttpService,
              private readonly _route:Router) { }

  ngOnInit() {
    this.cargarDatos()

  }
    ionViewWillEnter() {
        console.log("Se ve!!!");
        this.cargarDatos();
    }

  cargarDatos(){
    const parametros$ = this._activatedRoute.params;
    parametros$.subscribe(
        (parametro)=>{
          console.log('Parametros de ruta:',parametro)

          const id:number = parametro.id
            console.log(id)


          this.httpIngrediente.buscarQuery(`where={"fkComida":${id}}`).subscribe(
              (datos)=>{
                this.listaIngredientes = datos
                console.log(datos)


              },
              (error)=>{console.log(error)},
              ()=>{console.log("datos actualizados")}
          )
          this.httpComida.buscarPorId(id).subscribe(
              (dato)=>{
                this.nombre = dato.nombre
                  this.idCurrent = dato.id

                }

          )



        }

    )
  }


  buscarIngrediente(){

      this.httpIngrediente.buscarQuery(`where={"nombre":{"contains":"${this.textoBusqueda}"},"fkComida":"${this.idCurrent}"}`).subscribe(
          (dato)=>{
            console.log(dato)
            this.listaIngredientes =dato
          },
          (error)=>{
            console.log(error)
          }
      )

  }

  irCrearIngrediente(){
    const url = ['/Comida',this.idCurrent,'Ingredientes','Crear']
    this._route.navigate(url)
  }

  borrar(id:number){
    this.httpIngrediente.borrar(id).subscribe(
        (dato)=>{
          console.log(dato)
          this.cargarDatos()
        },
        (error)=>{
          console.log(error)
        }

    )


  }

}
