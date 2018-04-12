var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//modelos de la base de datos
var models = require("./models/index");
//se cambia index por vistas
var index = require('./routes/vistas');

//vinculo las rutas
var semilleros=require('./routes/semilleros');
var publicaciones=require('./routes/publicaciones');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//se quita ruta de usuarios
app.use('/', index);
app.use('/semilleros', semilleros);
app.use('/publicaciones', publicaciones);

//sincronizacion de la base de datos
models.sequelize.sync().then(
  function(){
    console.log("se conecto la BD!!!");
  }
).catch(
  function(error){
    console.log("error en la conexion:"+error);
  }
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
