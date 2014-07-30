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

app.get('/add/:x/:y/:z/:a', function(req, res){
  req.params.x *= 1;
  req.params.y *= 1;
  req.params.z *= 1;
  req.params.a *= 1;
  req.params.fontsize = req.query.fontsize;
  req.params.bordercolor = req.query.bordercolor;
  req.params.borderwidth = req.query.borderwidth;
  res.render('sum', req.params);
});

app.get('/sumlist/:list', function(req, res){
  var list = req.params.list.split(',');
  list = list.map(function(x){
    return x * 1;
  });
  var sum = 0;
  for(var i = 0; i <= list.length; i++){ 
    sum += list[i];
  }
  res.render('list', {list:list, sum:sum, even:req.query.even, odd:req.query.ood});
});

app.get('/rolldice/:rolls', function(req, res){
  var dice = [];
  for(var i = 0; i < req.params.rolls; i++){ 
    var result = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    dice.push(result);
  }
  res.render('dice', {dice:dice}); 
});
var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT', port);
});
