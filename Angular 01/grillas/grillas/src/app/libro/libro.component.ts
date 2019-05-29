import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor() { }
@Input()
srcText;

  @Input()
  titulo;

  ngOnInit() {
  }

}
