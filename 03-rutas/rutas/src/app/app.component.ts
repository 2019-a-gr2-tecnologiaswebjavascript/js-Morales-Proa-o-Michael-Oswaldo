import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rutas';
  rutaHome = ['/home', "app"];
  rutaCreditos = ['/creditos','1','12.13'];
  rutanoEncontrada = ['/no-encontrada'];
  rutaProductos = ['/productos'];

}

