var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var FranquiciaSchema = Schema({
    id_franquicia : String,
    nombre_franquicia : String,
    zona : String,
    dueno : String
});
module.exports=mongoose.model('Franquicia',FranquiciaSchema,'franquicia');
