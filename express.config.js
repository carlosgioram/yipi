'use strict'

var express = require('express');
var bodyParser= require('body-parser');

var config = express();

// cargar rutas

var user_router = require('./routers/userRouters');
// middlewares
config.use(bodyParser.urlencoded({extended:false}));
config.use(bodyParser.json());
//cors
// configurar cabeceras http
config.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
config.use('/yipi',user_router);
//exportar congiguracion
module.exports=config;
