import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    const parametros$ = this._activatedRoute.params;


    const queryParams$ = this._activatedRoute.queryParams;
    parametros$.subscribe(
      (parametro)=>{
        console.log('Parametros de ruta:',parametro)

      }
    )
    queryParams$.subscribe((qp)=>{console.log('Parametros de consulta:',qp)})




  }

}
