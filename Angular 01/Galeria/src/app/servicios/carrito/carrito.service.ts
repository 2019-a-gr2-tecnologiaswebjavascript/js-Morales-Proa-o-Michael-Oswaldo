import {Injectable, OnInit} from "@angular/core";
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";
import {HttpClient} from "@angular/common/http";
import {HttpItemCarritoCompras} from "../http/http-itemCarritoCompras";

@Injectable()
export class carritoService  {
        constructor(private readonly _httpClien:HttpClient, private readonly httpItemCarritoCompras: HttpItemCarritoCompras){

        }
  carritoCompras: ItemCarritoCompras[] = [];


  actualizarCarrito(){


    const carritoComprasBack$ = this.httpItemCarritoCompras.buscarTodos();

    carritoComprasBack$.subscribe(
      (item)=>{
          item.forEach(
            (itemCarritoCompras)=>{
              this.carritoCompras.splice(0,0,itemCarritoCompras)
            }
          )
        console.log(this.carritoCompras)
      }
    )
  }




  agregarCarritoCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras [] {

let indiceItem = -1

    const identificador = itemCarrito.valor;

    const identificadorTienda = itemCarrito.nombreTienda;

    const existeElItem = this.carritoCompras.some((item: ItemCarritoCompras,indice) => {

      if (item.valor == identificador && item.nombreTienda==identificadorTienda) {
      indiceItem = indice
        return true
      } else {
          return false
      }
    })
    if (existeElItem) {
      this.añadirAlContador(indiceItem)
      console.log('Se añadio al carriotp ')
    }
    else {

   this.añadirAlCarrito(itemCarrito)
    }

console.log('se añadio al carrito',itemCarrito)
    this.guardarBaseDeDatos()


    return this.carritoCompras



  }





  private añadirAlContador(indice:number) {
    this.carritoCompras[indice].cantidad++;
  }
 private  añadirAlCarrito(item:ItemCarritoCompras){
    item.cantidad= 1;
    this.carritoCompras.splice(0,0,item)
    ;
  }

  guardarBaseDeDatos(){

    this.carritoCompras.forEach((itemCarritoCompras)=>{
      const itemConsulta$ = this.httpItemCarritoCompras.buscarPorId(itemCarritoCompras.id)
      itemConsulta$.subscribe(
        (item)=>{
          const postItemCarrito = this.httpItemCarritoCompras.actualizar(itemCarritoCompras.id,itemCarritoCompras)
          postItemCarrito.subscribe(
            (item)=>{
              console.log("Guardado en la base de datos ")
            }
          )

        },
        (error)=>{
          const putItemCarrito = this.httpItemCarritoCompras.crear(itemCarritoCompras)
          putItemCarrito.subscribe(
            (item)=>{
              console.log("Creado en la base de datos ")
            }
          )

        }
      )




    })


  }


}
