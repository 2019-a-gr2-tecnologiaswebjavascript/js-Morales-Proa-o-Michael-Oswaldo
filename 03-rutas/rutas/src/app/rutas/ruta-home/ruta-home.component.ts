import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService: AuthService) {


  }

  ngOnInit() {
  }

  login(){
    console.log('estamos Logeando')
    this._authService.login('1234','Michael')

  }
  logout(){
    console.log('Estamos Deslogeando')
    this._authService.logout()

  }
}
