'use stric'

var DatosCobro=require('../models/DatosCobro');
var mongoosePaginate =require('mongoose-pagination');

function getDatosCobro (req,res){
  var page =1;
  var itemsPage=20;
  if(req.params.page){
    page=req.params.page;
  }
  DatosCobro.find().sort().paginate(page,itemsPage,(error,data,total)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!data)return res.status(404).send({messages:'no se encuentra usuarios'});
    return res.status(200).send({
      data,
      total,
      pages:Math.ceil(total/itemsPage)
    });
  });
}
module.exports={
  getDatosCobro
}
