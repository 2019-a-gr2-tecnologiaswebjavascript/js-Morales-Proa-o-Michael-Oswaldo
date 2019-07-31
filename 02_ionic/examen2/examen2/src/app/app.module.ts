import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioHttpService} from "./services/http/HttpUsuario.service";
import {AuthService} from "./services/Auth/auth.service";
import {EstaLogeadoService} from "./services/Guards/esta-logeado.service";
import {ComidaHttpService} from "./services/http/HttpComida.service";
import {RutaCrearComidaComponent} from "./rutas/ruta-crear-comida/ruta-crear-comida.component";
import {FormsModule} from "@angular/forms";
import {RutaIngredienteComidaComponent} from "./rutas/ruta-ingrediente-comida/ruta-ingrediente-comida.component";
import {IngredienteHttpService} from "./services/http/HttpIngrediente";
import {RutaIngredienteCrearComponent} from "./rutas/ruta-ingrediente-crear/ruta-ingrediente-crear.component";
import {CarritoComprasService} from "./services/CarritoCompras/carrito-compras.service";
import {FacturationServiceService} from "./services/Facturation/facturation-service.service";
import {DetalleFacturaHttp} from "./services/http/HttpDetalleFactura";
import {FacturaHttp} from "./services/http/HttpFactura";


@NgModule({
  declarations: [AppComponent,
  RutaCrearComidaComponent,
  RutaIngredienteComidaComponent,
  RutaIngredienteCrearComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioHttpService,
    AuthService,
      EstaLogeadoService,
      ComidaHttpService,
      IngredienteHttpService,
      CarritoComprasService,
      FacturationServiceService,
      DetalleFacturaHttp,
      FacturaHttp,


    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
