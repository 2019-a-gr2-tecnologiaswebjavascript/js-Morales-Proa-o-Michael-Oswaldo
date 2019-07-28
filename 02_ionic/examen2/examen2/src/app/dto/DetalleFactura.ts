import {Ingrediente} from "./Ingrediente";
import {Factura} from "./Factura";


export interface DetalleFactura {
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    fkIngrediente: number | Ingrediente | any
    fkFactura:number | Factura | any
}





