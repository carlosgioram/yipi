var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var SueldosChoferesSchema = Schema({
  id_chofer : String,
  franquicia : String,
  tipo_sueldo : String,
  dato_sueldo : String
});
module.exports=mongoose.model('Sueldos_choferes',SueldosChoferesSchema);
