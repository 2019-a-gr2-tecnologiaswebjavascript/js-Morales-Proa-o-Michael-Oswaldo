export interface Usuario{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    "nombre": string,
    "cedula": string,
    "email": string,
    "contrasenia":string
    facturasDeUsuario?:any[],
}
