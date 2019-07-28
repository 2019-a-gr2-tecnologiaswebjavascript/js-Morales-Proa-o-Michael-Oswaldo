import {Comida} from "./Comida";
import {DetalleFactura} from "./DetalleFactura";

export interface Ingrediente{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    nombre:string,
    cantidad:number,
    descripcion:string,
    original:boolean,
    tipo:string,
    necesitaRefrigeracion:boolean,
    fkComida: number | Comida | any,
    detallesDeIngrediente: DetalleFactura
}
