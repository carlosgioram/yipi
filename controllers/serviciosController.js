'use stric'

var Servicios=require('../models/Servicios');
var mongoosePaginate =require('mongoose-pagination');

function getServicios (req,res){
  var page =1;
  var itemsPage=20;
  if(req.params.page){
    page=req.params.page;
  }
  Servicios.find().sort('fecha_inicio').paginate(page,itemsPage,(error,servicios,total)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!servicios)return res.status(404).send({messages:'no se encuentra usuarios'});
    return res.status(200).send({
      servicios,
      total,
      pages:Math.ceil(total/itemsPage)
    });
  });
}
module.exports={
  getServicios
}
