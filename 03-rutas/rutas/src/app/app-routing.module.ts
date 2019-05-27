import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaCreditosComponent} from "./rutas/ruta-creditos/ruta-creditos.component";
import {RutaProductosComponent} from "./rutas/ruta-productos/ruta-productos.component";
import {NotFoundComponent} from "./rutas/not-found/not-found.component";
import {RutaProductosTecnologiaComponent} from "./rutas/ruta-productos-tecnologia/ruta-productos-tecnologia.component";
import {RutaProductosDomesticosComponent} from "./rutas/ruta-productos-domesticos/ruta-productos-domesticos.component";

const routes: Routes = [
  {
    path: 'home/app',
    component: RutaHomeComponent
  },
  {
    path: 'creditos/:idCredito/:tasa',
    component: RutaCreditosComponent
  },
  {
    path: 'productos',
    component: RutaProductosComponent,
    children : [
      {
        path: 'tecnologia',
        component: RutaProductosTecnologiaComponent
      },
      {
        path: 'domesticos',
        component: RutaProductosDomesticosComponent
      }
    ]
  },
  {
    path: 'no-encontrada',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent


  },
  {
    path: '',
    redirectTo: '/home/app',
    pathMatch: 'full'
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
