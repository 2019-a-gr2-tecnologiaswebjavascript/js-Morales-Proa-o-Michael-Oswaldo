import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UsuarioHttpService} from "./servicios/http/Usuario-http.service";
import {userError} from "@angular/compiler-cli/src/transformers/util";
import {Usuario} from "./dto/usuario";
import {ProductoHttpService} from "./servicios/http/Producto-http.service";
import {ProductoUsuarioHttpService} from "./servicios/http/ProductoUsuario-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  usuarios: Usuario;


  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService,
              private readonly _productoHttpService: ProductoHttpService,
              private readonly _productoUsuarioService: ProductoUsuarioHttpService
  ) {


  }

  ngOnInit() {
    this._productoHttpService.crear({nombre:"Licuadora",
      codigo:"123456"
      }).subscribe(
      (nuevoProducto)=>{
        console.log(nuevoProducto)
      }
    )
    this._productoHttpService.crear({nombre:"Lavadora",
        codigo:"1234565"
      }).subscribe(
      (nuevoProducto)=>{
        console.log(nuevoProducto)
      }
    )
    this._productoHttpService.crear({nombre:"Pescadora",
        codigo:"1234568"
      }).subscribe(
      (nuevoProducto)=>{
        console.log(nuevoProducto)
      }
    )


    this._productoUsuarioService.crear({
        cantidad:10,
        fkProducto:1,
        fkUsuario:1
      }).subscribe(
      (nuevoProducto)=>{
        console.log(nuevoProducto)
      }
    )


  }

  actualizar(){

    const usuarioActualizar$ = this._usuarioHttpService
      .actualizar(
        "39",
        {
          nombre: "Actualizado ",
          apellido: "Actualizado",
        });
    usuarioActualizar$
      .subscribe(
        (nuevoUsuario) => {
          console.log(nuevoUsuario)

        }
      )

  }
  borrar(){

    const usuarioBorrar$ = this._usuarioHttpService.borrar("27")
      .subscribe((data)=>
        console.log(data))


  }
  buscarPorId(){
    const usuarioId$ = this._usuarioHttpService.buscarPorId("42")
      .subscribe(
        (user) => {
          console.log(user)
        }
      )

  }
  buscarTodos(){

    const usuariosBuscar$ = this._usuarioHttpService.buscarTodos();
    usuariosBuscar$
      .subscribe(
        (userBuscar)=>{
          console.log(userBuscar)

        }
      )
  }
  crear(){
    const usuarioCrear$ = this._usuarioHttpService.crear(
      {nombre: "nuevito mijardinnn",
        apellido: "nuevitito Mijoooooo",
        cedula:"1724196983",
        username:"nuevitoo123"});
    usuarioCrear$
      .subscribe(
        (nuevoUsuario) => {
          console.log(nuevoUsuario)

        }
      )
  }

  }

