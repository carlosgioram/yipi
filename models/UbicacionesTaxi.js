var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var UbicacionesTaxiSchema = Schema({
  no_placas : String,
  latitud : String,
  longitud : String,
  folio_serv : String,
  fecha : Number
});
module.exports=mongoose.model('UbicacionesTaxi',UbicacionesTaxiSchema,'ubicacionesTaxi');
