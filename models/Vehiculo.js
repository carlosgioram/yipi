'use stric'

var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var VehiculoSchema = Schema({
numero_coche : String,
chofer : String,
franquicia : String,
marca : String,
modelo : String,
año : String,
no_placas : String,
no_serie : String,
no_motor : String,
zona_sitio : String,
seguro : {
    poliza_seguro : String,
    empresa_seguro : String,
    fecha_vencimiento_seguro :String
},
revista : {
    no_rev : String,
    fecha_rev : String
},
verificacion : {
    fecha_verif : String,
    proxima_verif : String
},
no_concesion : String,
mantenimiento : {
    fecha_mtto : String,
    tipo_mtto : String,
    lugar_mtto : String,
    costo_mtto : String,
    descripcion_mtto : String
},
status_taxi : String,
disponibilidad : String,
ubicacion : {
    latitud : String,
    longitud : String
},
carga : String,
no_concecion : String,
tipo : String
});
module.exports=mongoose.model('Vehiculo',VehiculoSchema);
