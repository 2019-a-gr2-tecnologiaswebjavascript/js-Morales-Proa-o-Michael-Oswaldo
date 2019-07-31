import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Factura} from "../../dto/Factura";

@Injectable()
export class FacturaHttp extends HttpEntityService<Factura>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/Factura")
    }

}
