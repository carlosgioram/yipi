var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var GruposTiendaSchema = Schema({
  id_grupo : String,
  nombre_grupo : String,
  iniciales : String,
  password : String
});
module.exports=mongoose.model('Grupos_tienda',GruposTiendaSchema,'grupos_tienda');
