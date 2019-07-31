import {Usuario} from "./Usuario";
import {DetalleFactura} from "./DetalleFactura";


export interface Factura{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    cajero: String,
    total:number,
    detallesDeFactura: DetalleFactura[] | any,
    fkUsuario: number | Usuario | any
}
