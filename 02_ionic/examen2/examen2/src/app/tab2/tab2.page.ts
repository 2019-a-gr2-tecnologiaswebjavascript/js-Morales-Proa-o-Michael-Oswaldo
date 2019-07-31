import {Component, OnInit} from '@angular/core';
import {Factura} from "../dto/Factura";
import {FacturaHttp} from "../services/http/HttpFactura";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  listaCompras: Factura[] = []
  textoBusqueda:string

  constructor(private readonly _httpFactura: FacturaHttp) {}


ngOnInit(): void {

    this.cargarLista()
}
  ionViewWillEnter() {
    console.log("Se ve!!!");
    this.cargarLista();
  }
  cargarLista(){
    this._httpFactura.buscarTodos().subscribe(
        (datos)=>{
          this.listaCompras = datos
        }
    )

  }

  buscarFacturas(){
    this._httpFactura.buscarQuery(`where={"cajero":{"contains":"${this.textoBusqueda}"}}`).subscribe(
        (dato)=>{
          console.log(dato)
          this.listaCompras = dato
        },
        (error)=>{
          console.log(error)
        }
    )
  }


}
