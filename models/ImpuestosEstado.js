var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var ImpuestosEstadoSchema = Schema({
  estado : String,
  especial_transporte : String
});
module.exports=mongoose.model('Impuestos_estados',ImpuestosEstadoSchema);
