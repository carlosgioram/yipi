var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var PuntosCargaSchema = Schema({
  id_tienda : String,
  nombre_tienda : String,
  grupo : String,
  direccion : String,
  zona : String,
  latitud : String,
  longitud : String
});
module.exports=mongoose.model('Puntos_recarga',PuntosCargaSchema,'puntos_recarga');
