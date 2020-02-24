var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var SaldosVencidosSchema = Schema({
  usuario : String,
   monto_vencido : Number,
   zona : String,
   fecha_vencimiento : Number,
   porcentGEC : String,
   porcentFranq : String
});
module.exports=mongoose.model('Saldos_vencidos_historial',SaldosVencidosSchema,'saldos_vencidos_historial');
