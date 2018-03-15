var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Bienvenidos a mi blog', autor:"Andres Clavijo Rodriguez" });
});

module.exports = router;
