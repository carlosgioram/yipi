'use stric'

var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var ServiciosSchema = Schema({
      folio_serv : String,
      no_placas : String,
      id_chofer : String,
      id_usuario : String,
      zona : String,
      numero_pasajeros : String,
      fecha_solic : Number,
      hora_solic : String,
      punto_solicitud : {
          latitud : String,
          longitud : String
      },
      punto_inicio : {
          latitud : String,
          longitud : String
      },
      punto_destino : {
          latitud : String,
          longitud : String
      },
      distancia : String,
      costo : String,
      fecha_inicio : Number,
      hora_inicio : String,
      fecha_fin : Number,
      hora_fin : String,
      evaluacion_serv : String,
      estado : String,
      pagadoCC : String,
      dispositivo : String,
      valoracion : String
});
module.exports=mongoose.model('Servicio',ServiciosSchema);
