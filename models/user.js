'use stric'

var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var UserSchema = Schema({
	id_usuario : String,
    nombre : String,
    apaterno : String,
    amaterno : String,
    correo : String,
    calle : String,
    ncalle : String,
    tipo_usuario : String,
    colonia_barrio : String,
    delegacion_municipio : String,
    estado_entidad : String,
    fecha_nacimiento : String,
    estado_civil : String,
    genero : String,
    ocupacion : String,
    rfc : String,
    password : String,
    telefono :String,
    tipo_sangre : String,
    curp : String,
    cp : String,
    id_dispositivo : String,
    huella : String,
    foto : String

});
module.exports=mongoose.model('Usuario',UserSchema);
