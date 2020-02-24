export class Vehiculo {
  constructor(
    public _id :  string,
    public numero_coche : string,
    public chofer : string,
    public franquicia : string,
    public marca : string,
    public modelo : string,
    public año : string,
    public no_placas : string,
    public no_serie : string,
    public no_motor : string,
    public zona_sitio : string,
    public seguro : object,
    public revista : object,
    public verificacion : object ,
    public no_concesion : string,
    public mantenimiento : object ,
    public status_taxi : string,
    public disponibilidad : string,
    public ubicacion : object ,
    public carga : string,
    public no_concecion : string,
    public tipo : string
  ) {}
}
