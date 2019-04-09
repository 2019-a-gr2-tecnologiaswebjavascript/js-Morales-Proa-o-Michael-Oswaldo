import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    ItemGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
