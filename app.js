var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectDB = require("./app_api/models/db");
connectDB(); // connect to mongoDB
var cors = require('cors')// postmen

//route app_api Genre
const genreRouteAPI = require("./app_api/routes/genre")
//route app_api Game
const gameRouteAPI = require("./app_api/routes/game")


var app = express();
app.use(cors())//postmen

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use Route API 
app.use('/api/genre', genreRouteAPI);
app.use('/api/game', gameRouteAPI);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
