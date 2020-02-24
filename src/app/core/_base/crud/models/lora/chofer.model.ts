export class Chofer{
  constructor(
    public _id : string,
    public id_usuario : string,
    public correo_chofer : string,
    public numero_coche : string,
    public fecha_inicio : Number,
    public hora_inicio : string,
    public fecha_fin : string,
    public hora_fin :string ,
    public sesion_status : number
  ){}
}
