import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioHttpService} from "../services/http/HttpUsuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string ;
  contrasenia:string;

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService,
              ) { }



  ngOnInit() {
  }

  logearse(){
    console.log("usuario : ",this.usuario," contraseña: ",this.contrasenia)
    this._usuarioHttpService.buscarTodos()
        .subscribe(
            (nuevoProducto)=>{
              console.log(nuevoProducto)
            }
        )





  }

}
