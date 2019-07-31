import { Injectable } from '@angular/core';
import {Factura} from "../../dto/Factura";
import {DetalleFacturaHttp} from "../http/HttpDetalleFactura";
import {FacturaHttp} from "../http/HttpFactura";
import {UsuarioHttpService} from "../http/HttpUsuario.service";
import {DetalleFactura} from "../../dto/DetalleFactura";
import {Usuario} from "../../dto/Usuario";

@Injectable({
  providedIn: 'root'
})
export class FacturationServiceService {
  facturaToStore:Factura = {cajero: '',
    total:0,
    fkUsuario: ''
  }

  detalleToStore:DetalleFactura = {
    fkFactura:0,
    fkIngrediente:0,
    cantidad:0

  };


  constructor(private readonly httpDetalle:DetalleFacturaHttp,
              private readonly httpFactura:FacturaHttp,
              private readonly httUsuario:UsuarioHttpService,) { }



  facturar(detalles:DetalleFactura[],cajero:string,total:number,usuario:Usuario){
    this.httUsuario.crear(usuario).subscribe(
        (usuarioCreado)=>{
          this.facturaToStore.fkUsuario = usuarioCreado.id
          this.facturaToStore.total = total
          this.facturaToStore.cajero = cajero
          this.httpFactura.crear(this.facturaToStore).subscribe(
              (facturaCreada)=>{
                detalles.forEach((detalle)=>{
                  this.detalleToStore.fkFactura = facturaCreada.id
                  this.detalleToStore.fkIngrediente = detalle.fkIngrediente.id
                  this.detalleToStore.cantidad = detalle.cantidad

                  console.log('se va a crear el usuario: ',this.detalleToStore)
                  this.httpDetalle.crear(this.detalleToStore).subscribe(
                      (response)=>{
                        console.log('Detalle se ha  Creado creada con id ', response.fkFactura)
                      }
                  )
                })


              },
              (error)=>{
                console.log(error)
              },
              ()=>{
                console.log('Factura creada')
              }
          )
        },
        (error)=>{
          console.log(error)
        },
        ()=>{
          console.log('user Facturado well')
        }
    )
  }
}
