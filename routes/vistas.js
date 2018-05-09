var express = require('express');
var router = express.Router();
let models = require('../models/index');
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/detalleSemilleros', function(req, res, next) {
  let info=[];
  models.Semilleros.findAll().then(
    (lista)=>{
        res.render('detalleSemilleros',{info:lista});
        console.log(lista);
    }
  ).catch(
    (error)=>{
      res.render(error);
    }
  );
});
router.get('/detallePublicaciones', function(req, res, next) {
  let info=[];
  models.Publicaciones.findAll().then(
    (lista)=>{
        res.render('detallePublicaciones',{info:lista});
        console.log(lista);
    }
  ).catch(
    (error)=>{
      res.render(error);
    }
  );
});
// router.get('/', function(req, res, next) {
//   let info=[];
//   models.Semilleros.findAll().then(
//     (lista)=>{
//         res.render('index',{info:lista});
//         console.log(lista);
//     }
//   ).catch(
//     (error)=>{
//       res.render(error);
//     }
//   );
// });
router.get('/listaSemilleros', function(req, res, next) {
  res.render('listaSemilleros');
});
router.get('/listaPublicaciones', function(req, res, next) {
  res.render('listaPublicaciones');
});
router.get('/crearSemillero', function(req, res, next) {
  res.render('crearSemillero');
});
router.get('/crearPublicaciones', function(req, res, next) {
  res.render('crearPublicaciones');
});
module.exports = router;
