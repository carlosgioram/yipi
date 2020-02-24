'use stric'

var express = require('express');
var UserController = require('../controllers/userController');
var ChoferController = require('../controllers/choferController');
var VehiculoController=require('../controllers/vehiculoController');
var ServiciosController=require('../controllers/serviciosController');
var AsociadosController=require('../controllers/asociadosController');
var CentroCargaController=require('../controllers/centroCargaController');
var ConteoController=require('../controllers/conteoController');
var DatosCobroController=require('../controllers/datosCobroController');
var FranquiciaController=require('../controllers/franquiciaController');
var GruposTiendaController=require('../controllers/gruposTiendaController');
var ImpuestosEstadosController=require('../controllers/ImpuestosEstadosController');
var PuntosCargaController=require('../controllers/puntosCargaController');
var RecargasController=require('../controllers/recargasController');
var RecargasOpenPayController=require('../controllers/recargasOpenPayController');
var SaldosVencidosController=require('../controllers/saldosVencidosController');
var SueldosChoferesController=require('../controllers/sueldosChoferesController');
//var TransaccionesController=require('../controllers/transaccionesController');
var UbicacionesController=require('../controllers/ubicacionesTaxiController');
var ZonaTrabajoController=require('../controllers/zonasTrabajoController');

var api =express.Router();
api.get('/home',UserController.home); //ok
api.get('/user/:id',UserController.getUser); //ok
api.get('/usuarios/:page?',UserController.getUsers);//ok
api.get('/chofer/:id',ChoferController.getChofer);//ok
api.get('/choferes/:page?',ChoferController.getChoferes);//ok
api.get('/vehiculo/:id',VehiculoController.getVehiculo);//ok
api.get('/vehiculos/:page?',VehiculoController.getVehiculos);//ok
api.get('/servicios/:page?',ServiciosController.getServicios);//ok
api.get('/asociados/:page?',AsociadosController.getAsociados);//ok
api.get('/centros/:page?',CentroCargaController.getCentroCarga);//ok
api.get('/conteo/:page?',ConteoController.getConteo);//ok
api.get('/datosCobro/:page?',DatosCobroController.getDatosCobro);//ok
api.get('/franquicia/:page?',FranquiciaController.getFranquicia);//ok
api.get('/tienda/:page?',GruposTiendaController.getGruposTienda);//ok
api.get('/impuestos/:page?',ImpuestosEstadosController.getImpuestosEstado);//ok
api.get('/puntosCarga/:page?',PuntosCargaController.getPuntosCarga);//ok
api.get('/recargas/:page?',RecargasController.getRecargas);//ok
api.get('/recargasOpen/:page?',RecargasOpenPayController.getRecargasOpen);//ok
api.get('/saldosVencidos/:page?',SaldosVencidosController.getSaldosVencidos);//ok
api.get('/sueldos/:page?',SueldosChoferesController.getSueldosChoferes);//ok
api.get('/ubicaciones/:page?',UbicacionesController.getUbicacionesTaxi);//ok
api.get('/zona/:page?',ZonaTrabajoController.getZonaTrabajo);//ok

module.exports=api;
