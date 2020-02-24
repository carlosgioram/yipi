var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var CentroCargaSchema = new Schema({
      nombre : String,
      latitud : String,
      longitud : String,
      direccion : String
});
module.exports=mongoose.model('centro_carga',CentroCargaSchema,'centro_carga');
