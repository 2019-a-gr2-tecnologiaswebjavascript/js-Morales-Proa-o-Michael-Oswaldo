import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import {carritoService} from "./servicios/carrito/carrito.service";
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

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
    AppRoutingModule
  ],
  providers: //aqui vienen los servicios:
    [
      carritoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
