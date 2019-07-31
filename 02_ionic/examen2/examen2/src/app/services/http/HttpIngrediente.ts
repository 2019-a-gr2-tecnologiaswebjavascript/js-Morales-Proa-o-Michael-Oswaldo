import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Ingrediente} from "../../dto/Ingrediente";



@Injectable()
export class IngredienteHttpService extends HttpEntityService<Ingrediente>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/Ingrediente")
    }

}
