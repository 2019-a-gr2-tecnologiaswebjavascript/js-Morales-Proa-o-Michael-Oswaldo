import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { NotFoundComponent } from './rutas/not-found/not-found.component';
import { RutaProductosTecnologiaComponent } from './rutas/ruta-productos-tecnologia/ruta-productos-tecnologia.component';
import { RutaProductosDomesticosComponent } from './rutas/ruta-productos-domesticos/ruta-productos-domesticos.component';
import {EstaLogeadoService} from "./servicios/guards/esta-logeado.service";
import {AuthService} from "./servicios/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    NotFoundComponent,
    RutaProductosTecnologiaComponent,
    RutaProductosDomesticosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EstaLogeadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
