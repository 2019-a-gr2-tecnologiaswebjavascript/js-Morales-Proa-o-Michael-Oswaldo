import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DetalleFactura} from "../../dto/DetalleFactura";

@Injectable()
export class DetalleFacturaHttp extends HttpEntityService<DetalleFactura>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/DetalleFactura")
    }
}
