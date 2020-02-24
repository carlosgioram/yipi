var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var DatosCobroSchema = Schema({any: Object});
module.exports=mongoose.model('Datos_cobro',DatosCobroSchema,'datos_cobro');
