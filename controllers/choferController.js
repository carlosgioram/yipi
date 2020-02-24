'use stric'

var Chofer=require('../models/Chofer');
var mongoosePaginate =require('mongoose-pagination');
// extrae chofer por id
function getChofer(req,res){
  var choferId=req.params.id;
  Chofer.findById(choferId,(error ,chofer)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!chofer)return res.status(404).send({messages:'no se encuentra usuario'});
    return res.status(200).send({chofer});
  });
};
// extrae todos los choferes de la tabla con parametro de paginacion
function getChoferes (req,res){
  var page =1;
  var itemsPage=20;
  if(req.params.page){
    page=req.params.page;
  }
  Chofer.find().sort('fecha_inicio').paginate(page,itemsPage,(error,choferes,total)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!choferes)return res.status(404).send({messages:'no se encuentra usuarios'});
    return res.status(200).send({
      choferes,
      total,
      pages:Math.ceil(total/itemsPage)
    });
  });
}
module.exports={
  getChofer,
  getChoferes
}
