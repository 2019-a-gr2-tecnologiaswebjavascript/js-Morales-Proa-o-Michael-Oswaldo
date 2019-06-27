import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export class HttpEntidad<Entidad> {
  protected url:string = "";
  protected modelo:string = "";


  constructor(protected readonly _httpClient: HttpClient, url:string, modelo:string
  ){
this.modelo = modelo
    this.url = url
  }

  crear(nuevaEntidad:Entidad):Observable<Entidad>{
    const url = `${this.url}${this.modelo}`

    return this._httpClient.post<Entidad>(url,nuevaEntidad)
  }

  actualizar(id:number,entidadActualizada:Entidad):Observable<Entidad>{
    const url = `${this.url}${this.modelo}/${id}`
    return this._httpClient.patch<Entidad>(url,entidadActualizada)
  }
  buscarTodos():Observable<Entidad[]>{
    const url = `${this.url}${this.modelo}`;
    return this._httpClient
      .get<Entidad[]>(url)

  }
  buscarPorId(id:number):Observable<Entidad>{
    const url = `${this.url}${this.modelo}/${id}`;
    return this._httpClient.get<Entidad>(url)

  }



}
