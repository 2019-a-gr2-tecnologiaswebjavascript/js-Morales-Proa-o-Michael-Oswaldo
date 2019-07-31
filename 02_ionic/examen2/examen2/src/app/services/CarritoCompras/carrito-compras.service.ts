import { Injectable } from '@angular/core';
import {DetalleFactura} from "../../dto/DetalleFactura"
import {Ingrediente} from "../../dto/Ingrediente";


@Injectable()
export class CarritoComprasService {

  detalles:DetalleFactura[]=[];
  listaGeneral:Ingrediente[]=[];

  total:number=0;

  constructor() {}


  agregarCarrito(ingredienteNuevo:Ingrediente){
    const existe = this.listaGeneral.some(
        (ingrediente,index)=>{
          if(ingrediente.id == ingredienteNuevo.id){
            return true;
          }else{
            return false;
          }
        }
    );
    if(existe){
      const indiceDetalle = this.detalles.findIndex(
          (detalle)=>{
            return detalle.fkIngrediente == ingredienteNuevo
          }
      );
      this.agregarUnidadDetalle(indiceDetalle);
    }else {
      this.listaGeneral.push(ingredienteNuevo);
      this.agregarNuevaLineaDetalle(
          {
            cantidad:1,
            fkIngrediente:ingredienteNuevo
          }
      );
    }
    this.calcularTotal();
  }

  agregarNuevaLineaDetalle(detalle:DetalleFactura){
    this.detalles.push(detalle);
  }

  agregarUnidadDetalle(indice){
    this.detalles[indice].cantidad +=1;
  }

  quitarUnidadDetalle(detalle:DetalleFactura){
    let indiceDetalle = this.detalles.indexOf(detalle);

    this.detalles[indiceDetalle].cantidad+=-1;
    if(this.detalles[indiceDetalle].cantidad<=0){
      this.detalles.splice(indiceDetalle,1);
      const indiceJugador = this.listaGeneral.indexOf(detalle.fkIngrediente);
      this.listaGeneral.splice(indiceJugador,1);
    }
    this.calcularTotal();
  }





  calcularTotal(){
    this.total = this.detalles.reduce(
        (total,detalle)=>{
          return total+(detalle.cantidad*detalle.fkIngrediente.precio)
        },
        0
    );
  }

}
