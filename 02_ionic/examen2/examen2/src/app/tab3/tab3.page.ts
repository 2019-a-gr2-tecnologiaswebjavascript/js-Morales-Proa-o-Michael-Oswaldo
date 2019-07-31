import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/Auth/auth.service";
import {Usuario} from "../dto/Usuario";
import {Ingrediente} from "../dto/Ingrediente";
import {IngredienteHttpService} from "../services/http/HttpIngrediente";
import {CarritoComprasService} from "../services/CarritoCompras/carrito-compras.service";
import {DetalleFactura} from "../dto/DetalleFactura";
import {FacturationServiceService} from "../services/Facturation/facturation-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  currentUser:string
  userToFacture:Usuario = {nombre:'',email:'',telefono:'',cedula:'',direccion:''}
    listaIngrediente:Ingrediente[] = [];
  detallesFactura:DetalleFactura[] = [];
  total = 0;

  constructor(private readonly _auth:AuthService,
              private readonly httpIngrediente:IngredienteHttpService,
              private readonly _carrito:CarritoComprasService,
              private readonly _facturation:FacturationServiceService,
              private readonly _route:Router){}

ngOnInit(){
    this.datos()
    this.actualizarListaComida()
    this.ActualizarDatosCarrito()

}


  datos(){
   this.currentUser = this._auth.currentUser.nombre

  }
    actualizarListaComida(){
        this.httpIngrediente.buscarTodos().subscribe(
            (datos)=>{
                this.listaIngrediente = datos
                console.log(datos)},
            (error)=>{console.log(error)},
            ()=>{console.log("datos actualizados")}
        )

    }

    ActualizarDatosCarrito(){
    this.detallesFactura = this._carrito.detalles
        this.total = this._carrito.total


    }

    agregarAlCarrito(item: Ingrediente){
      this._carrito.agregarCarrito(item)
        this.ActualizarDatosCarrito()

    }
    quitarIngrediente(item:DetalleFactura){
      this._carrito.quitarUnidadDetalle(item)
        this.ActualizarDatosCarrito()

    }




    comprar(){
     console.log('Comprando')

       this._facturation.facturar(this.detallesFactura,this.currentUser,this.total,this.userToFacture)
        const url = ['tabs']
        this._route.navigate(url)
    }




}
