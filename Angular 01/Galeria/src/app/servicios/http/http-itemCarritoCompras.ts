import {HttpEntidad} from "./http-Entidad";
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable()
export class HttpItemCarritoCompras extends HttpEntidad<ItemCarritoCompras>
{
constructor(protected readonly _httpClient:HttpClient){
  super(_httpClient,environment.url ,"ItemCarritoCompras");
}
}
