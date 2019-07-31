import {HttpEntityService} from "../http/HttpEntity.service";
import {Credenciales, Usuario} from "../../dto/Usuario";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";


@Injectable()
export class AuthService extends HttpEntityService<Usuario>{
  constructor(private readonly _httpClient:HttpClient,
              private readonly _router: Router){
    super(_httpClient,environment.url,"/Usuario")
  }

  currentUser:Usuario
  logeado:boolean = false


  login(credenciales: Credenciales){
    var email = credenciales.email
    var contrasenia = credenciales.contrasenia

    super.buscarQuery(`email=${email}&contrasenia=${contrasenia}`).subscribe(
        (datos)=>{
          if(datos.length > 0){
            console.log(datos)
            this.logeado = true
            this.currentUser = datos[0]
            const url = ['/tabs']
            this._router.navigate(url)
          }
          else{
            alert("Usuario No existe")
          }


        }

    )



  }
  logout(){
    this.currentUser = null
    this.logeado = false
    this._router.navigate(['/login'])

  }







}

