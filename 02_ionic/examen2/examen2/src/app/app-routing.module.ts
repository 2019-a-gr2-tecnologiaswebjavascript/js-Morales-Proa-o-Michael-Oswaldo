import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {EstaLogeadoService} from "./services/Guards/esta-logeado.service";
import {RutaCrearComidaComponent} from "./rutas/ruta-crear-comida/ruta-crear-comida.component";

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule',canActivate: [EstaLogeadoService]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Comida/Crear', component: RutaCrearComidaComponent, canActivate:[EstaLogeadoService]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
