import { Component, OnInit } from '@angular/core';
import {Ingrediente} from "../../dto/Ingrediente";
import {IngredienteHttpService} from "../../services/http/HttpIngrediente";
import {ActivatedRoute, Router} from "@angular/router";
import {ComidaHttpService} from "../../services/http/HttpComida.service";

@Component({
  selector: 'app-ruta-ingrediente-crear',
  templateUrl: './ruta-ingrediente-crear.component.html',
  styleUrls: ['./ruta-ingrediente-crear.component.scss'],
})
export class RutaIngredienteCrearComponent implements OnInit {
  Ingrediente: Ingrediente = {nombre:'',cantidad:null,descripcion:'',original:false,tipo:'', precio:0,necesitaRefrigeracion:false}
  idComida:number
  constructor(private readonly httpIngrediente:IngredienteHttpService,
              private readonly _route:Router,
              private readonly httpComida:ComidaHttpService,
              private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getData()

  }



  getData(){
  const parametros$ = this._activatedRoute.params;
  parametros$.subscribe(
      (parametro)=>{
        console.log('Parametros de ruta:',parametro)
        this.idComida = parametro.id

      }
  )

}
  crearIngrediente(){
    console.log(this.Ingrediente.nombre)
    console.log(this.Ingrediente.descripcion)
    console.log(this.Ingrediente.cantidad)
    console.log(this.Ingrediente.original)
    console.log(this.Ingrediente.necesitaRefrigeracion)
    this.Ingrediente.fkComida = this.idComida
    this.httpIngrediente.crear(this.Ingrediente).subscribe(
        (dato)=>{
          console.log(dato)
          const url = ['/Comida',this.idComida,'Ingredientes']
          this._route.navigate(url)
        },
        (error)=>{
          console.log(error)
        }

    )



  }

}
