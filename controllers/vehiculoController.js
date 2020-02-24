'use stric'

var Vehiculo=require('../models/Vehiculo');
var mongoosePaginate =require('mongoose-pagination');

function getVehiculo(req,res){
  var vehiculoId=req.params.id;
  Vehiculo.findById(vehiculoId,(error ,vehiculo)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!vehiculo)return res.status(404).send({messages:'no se encuentra usuario'});
    return res.status(200).send({vehiculo});
  });
};
function getVehiculos (req,res){
  var page =1;
  var itemsPage=20;
  if(req.params.page){
    page=req.params.page;
  }
  Vehiculo.find().sort('chofer').paginate(page,itemsPage,(error,vehiculos,total)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!vehiculos)return res.status(404).send({messages:'no se encuentra usuarios'});
    return res.status(200).send({
      vehiculos,
      total,
      pages:Math.ceil(total/itemsPage)
    });
  });
}
module.exports={
  getVehiculo,
  getVehiculos
}
