import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "../../../../../03-rutas/rutas/src/app/rutas/not-found/not-found.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaMostrarCarritoComponent} from "./rutas/ruta-mostrar-carrito/ruta-mostrar-carrito.component";


const routes: Routes = [
  {
    path:'login',
    component: RutaLoginComponent
  },
  {
    path:'home',
    component: RutaHomeComponent

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'carrito',
    component: RutaMostrarCarritoComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
