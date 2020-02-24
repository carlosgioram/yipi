var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var ZonaTrabajochema = Schema({
   id_zona : String,
   nombre_zona : String,
   estado : String,
   iniciales : String
});
module.exports=mongoose.model('zonas_trabajo',ZonaTrabajochema,'zonas_trabajo');
