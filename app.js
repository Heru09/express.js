var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const exphbs = require('express-handlebars');
// var handphone = require('./models/handphone.json');
// console.log(handphone);


var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var detailbarangRouter = require('./routes/detailbarang');


var app = express();

// view engine setup
// app.engine('.pug', exphbs({
//   defaultLayout: 'main',
//   extname: '.pug',
//   layoutsDir: path.join(__dirname, 'views')
// }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/detailbarang', detailbarangRouter);

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
