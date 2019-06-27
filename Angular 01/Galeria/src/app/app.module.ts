import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import {carritoService} from "./servicios/carrito/carrito.service";
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpItemCarritoCompras} from "./servicios/http/http-itemCarritoCompras";

@NgModule({
  declarations: //aqui se declaran todos los componentes que va a ausar la aplicación.
    [
    AppComponent,

    ItemGaleriaComponent,
    MostrarCarritoComponent

  ],
  imports: // aqui guardamos otros moulos.
    [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: //aqui vienen los servicios:
    [
      carritoService,
      HttpItemCarritoCompras,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
