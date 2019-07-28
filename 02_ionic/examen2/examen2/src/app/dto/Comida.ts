import {Usuario} from "./Usuario";
import {Ingrediente} from "./Ingrediente";

export interface Comida{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    "nombre": string,
    descripcion:string,
    nacionalidad:string,
    numeroPersonas:number,
    picante:boolean,
    fkUsuario:number | Usuario | any,
    ingredientesDeComida:Ingrediente[] | any
}



