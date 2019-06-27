import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../servicios/login/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  correo:string;
  contrasenia:string;

  constructor(private readonly _router: Router, private readonly _auth: AuthService) { }



  ngOnInit() {
  }


  autenticarCorreo(formularioLogin){

console.log(formularioLogin)
    const correo = formularioLogin.controls.correoUsuario.value
    const contrasenia = formularioLogin.controls.contraseniaUsuario.value
    const logeado = this._auth.login(correo,contrasenia)

if(logeado){

  console.log('logeado')
  this._router.navigate(['home'])

}
else{

  console.log('no existe usuario con las credenciales ingresadas')
  alert('No Existe usuario')

 formularioLogin.reset()//me ayuda a restear el formulario del angular (ojo demasiado importante)

}
  }
}
