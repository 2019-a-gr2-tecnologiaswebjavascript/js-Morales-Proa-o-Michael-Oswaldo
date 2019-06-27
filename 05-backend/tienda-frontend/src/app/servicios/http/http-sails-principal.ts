//RESTFUL ->METODOS "="


//Clase -> Metodos Logica

//Restful

//Extender esa clase

//Usarla

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Usuario} from "../../dto/usuario";

export class HttpSailsPrincipal<ClaseEntidad>{
  protected url:string = "";
  protected modelo:string = "";

  constructor(protected readonly httpClient:HttpClient, url:string,modelo:string){
    this.url = url
    this.modelo = modelo
  }

  //Crear
  crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad>{

    const url = `${this.url}${this.modelo}`;
    return this.httpClient
      .post<ClaseEntidad>(url,nuevoRegistro)

  }



  actualizar( id:string,registroActualizado):Observable<void>{
    const url = `${this.url}${this.modelo}/${id}`

    return this.httpClient.put<void>(url,registroActualizado)

  }




  //Borrar
  borrar(id:string):Observable<void>{
    const url = `${this.url}${this.modelo}/${id}`;
    return this.httpClient.delete<void>(url)
  }



  //Actualizar








  //BuscarPorId

  buscarPorId(id:string):Observable<ClaseEntidad>{
    const url = `${this.url}${this.modelo}/${id}`;
    return this.httpClient.get<ClaseEntidad>(url)


  }









  //BuscarTodos

  buscarTodos():Observable<ClaseEntidad[]>{
    const url = `${this.url}${this.modelo}`;
    return this.httpClient
      .get<ClaseEntidad[]>(url)

  }




}



