'use stric'

var User =require('../models/user');
var mongoosePaginate =require('mongoose-pagination');

function home(req,res){
	res.status(200).send({
		messages:'Servidor node'
	});
};
function getUser(req,res){
  var userId=req.params.id;
  User.findById(userId,(error ,user)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!user)return res.status(404).send({messages:'no se encuentra usuario'});
    return res.status(200).send({user});
  });
};
function getUsers (req,res){
  var page =1;
  var itemsPage=20;
  if(req.params.page){
    page=req.params.page;
  }
  User.find().paginate(page,itemsPage,(error,users,total)=>{
    if(error)return res.status(500).send({messages:'error en la peticion'});
    if(!users)return res.status(404).send({messages:'no se encuentra usuarios'});
    return res.status(200).send({
      users,
      total,
      pages:Math.ceil(total/itemsPage)
    });
  });
}
module.exports={
  home,
  getUser,
  getUsers
}
