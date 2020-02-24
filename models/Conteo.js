var mongoose =require ('mongoose');
var Schema =mongoose.Schema;

var ConteoSchema = Schema({
    cont : Number,
    conteo : Number,
    paynet : Number
});
module.exports=mongoose.model('Conteo',ConteoSchema,'conteo');
