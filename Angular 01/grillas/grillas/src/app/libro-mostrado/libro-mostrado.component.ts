import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-libro-mostrado',
  templateUrl: './libro-mostrado.component.html',
  styleUrls: ['./libro-mostrado.component.css']
})
export class LibroMostradoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  @Input()
  srcText;

  @Input()
  titulo;
  @Input()
  autor;
  @Input()
  idioma;

  @Input()
  precio;

  @Input()
  cantidad;



}
