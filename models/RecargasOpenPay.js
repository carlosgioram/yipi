var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var RecargasOpenSchema = Schema({
  correo : String,
  folio : String,
  fecha : Date,
  monto : String,
  oid : Number
});
module.exports=mongoose.model('RecargasOpenPay',RecargasOpenSchema,'recargasOpenpay');
