var path = require('path');
var express = require('express');
var helmet = require('helmet');
var compression = require('compression');
var app = express();
var port = 2001;

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
app.use(compression());
app.set('views', __dirname );
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static('public'));

app.get(reactRoutes, function(req, res) {
  res.status(200).render('index.html');
});

app.use('*', function(req, res) {
  if (req.accepts('html')) {
    res.redirect(301, '/');
  }
});


app.listen(port, function(err) {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('Listening at http://localhost:'+ port);
});
