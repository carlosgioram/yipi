var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var AsociadoSchema = Schema({
  id_dueño : Number,
  nombre_dueño : String,
  coches : [
      {
          id_coche : Number,
          marca : String,
          modelo : String,
          año : Number,
          placas : String,
          no_serie : String,
          no_motor : Number
      },
      {
          id_coche : Number,
          marca : String,
          modelo : String,
          año : Number,
          placas : String,
          no_serie : String,
          no_motor : Number
      }
  ],
  zona_sitio : String,
  poliza_seguro : String,
  no_revista : Number,
  fecha_revista : Date,
  ultima_verifacion : Date,
  no_consesion : Number,
  no_mantenimiento : {
      fecha : Date,
      tipo_mto : String,
      lugar : String,
      costo : Number
  }
});
module.exports=mongoose.model('Asociado',AsociadoSchema);
