var path = require('path');
var express = require('express');
var helmet = require('helmet');
var compression = require('compression');
var app = express();

var reactRoutes = [
  "/",
  "/about",
  "/homasy",
  "/iiShare",
  "/ctbcculture",
  "/ctbcfathersday",
  "/ctbctravel",
  "/citycafe",
  "/jwedumpling",
  "/fetnet",
  "/isabelle",
  "/aia",
  "/tcbcCCL",
  "/tcbcHLN",
]


app.use(helmet());
// app.disable('x-powered-by');
app.use(compression());
app.set('views', __dirname );
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static('public'));

app.get(reactRoutes, function(req, res) {
  res.status(200).render('index.html');
});

app.use('*', function(req, res) {
  res.redirect(301, '/');
});


app.listen(8081, function(err) {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('Listening at http://localhost:8080');
});
