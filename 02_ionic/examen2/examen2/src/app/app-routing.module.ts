import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {EstaLogeadoService} from "./services/Guards/esta-logeado.service";
import {RutaCrearComidaComponent} from "./rutas/ruta-crear-comida/ruta-crear-comida.component";
import {RutaIngredienteComidaComponent} from "./rutas/ruta-ingrediente-comida/ruta-ingrediente-comida.component";
import {RutaIngredienteCrearComponent} from "./rutas/ruta-ingrediente-crear/ruta-ingrediente-crear.component";

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule',canActivate: [EstaLogeadoService]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Comida/Crear', component: RutaCrearComidaComponent, canActivate:[EstaLogeadoService]},
  { path: 'Comida/:id/Ingredientes', component: RutaIngredienteComidaComponent, canActivate:[EstaLogeadoService]},
  { path: 'Comida/:id/Ingredientes/Crear', component: RutaIngredienteCrearComponent, canActivate:[EstaLogeadoService]}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
