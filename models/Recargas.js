var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var RecargasSchema = Schema({
  id_recarga : String,
  usuario : String,
  monto : String,
  id_tienda : String,
  fecha : Number,
  facturado : String
});
module.exports=mongoose.model('Recarga',RecargasSchema);
