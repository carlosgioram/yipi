'use stric'

var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var ChoferSchema = Schema({
      id_usuario : String,
      correo_chofer : String,
      numero_coche : String,
      fecha_inicio : Number,
      hora_inicio : String,
      fecha_fin : String,
      hora_fin :String ,
      sesion_status : Number
});
module.exports=mongoose.model('Sesion_choferes',ChoferSchema);
