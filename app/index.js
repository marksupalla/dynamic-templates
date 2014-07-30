'use strict';

var morgan = require('morgan');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/checkers', function(req, res){
  res.render('checkers');
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT', port);
});
