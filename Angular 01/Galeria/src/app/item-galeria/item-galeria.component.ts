import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title  = 'Licoreria'
@Input()
nombreItem ;
@Input()
textoBoton;
  constructor() { }

  ngOnInit() {
  }

  alertar(){

    alert('Auxilio mijo: '+this.nombreItem);

  }

  alertarBlur(){

    alert('Alertando Blur: '+this.nombreItem);

  }

}





class Usuario{


@Input()

  private nombre='Michael'


  constructor(nombre){


}
metodoPublico(){



}
private metodoPrivado(){



}
protected metodoProtected(){



}


}
