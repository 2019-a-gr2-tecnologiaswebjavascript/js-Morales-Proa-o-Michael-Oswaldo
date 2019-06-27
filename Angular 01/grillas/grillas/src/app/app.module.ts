import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./servicios/login/auth.service";
import {EstaLogeadoServiceService} from "./servicios/auth/esta-logeado-service.service";
import {CarritoComprasService} from "./servicios/carrito_compras/carrito-compras.service";
import {RutaMostrarCarritoComponent} from './rutas/ruta-mostrar-carrito/ruta-mostrar-carrito.component';
import { LibroMostradoComponent } from './libro-mostrado/libro-mostrado.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    RutaLoginComponent,
    RutaHomeComponent,
    RutaMostrarCarritoComponent,
    LibroMostradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    EstaLogeadoServiceService,
    CarritoComprasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
