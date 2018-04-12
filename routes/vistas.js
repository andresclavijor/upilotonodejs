var express = require('express');
var router = express.Router();
let models = require('../models/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  let info=[];
  models.Semilleros.findAll().then(
    (lista)=>{
        res.render('index',{info:lista});
        console.log(lista);
    }
  ).catch(
    (error)=>{
      res.render(error);
    }
  );
});
router.get('/listaSemilleros', function(req, res, next) {
  res.render('listaSemilleros');
});
router.get('/crearSemillero', function(req, res, next) {
  res.render('crearSemillero');
});
module.exports = router;
