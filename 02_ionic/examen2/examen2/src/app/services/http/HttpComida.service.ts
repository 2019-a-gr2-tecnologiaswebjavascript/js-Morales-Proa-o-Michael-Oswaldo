import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Comida} from "../../dto/Comida";

@Injectable()
export class ComidaHttpService extends HttpEntityService<Comida>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/Comida")
    }







}
