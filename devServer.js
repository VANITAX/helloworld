var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var devport = 12700;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));


app.get('/data', function(req, res) {
  // switch(){
  //   case 'works':
  //   case 'work':
  //   case 'about':
  //   default:
  // }

  res.json(require('./src/script/data/content.json'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(devport, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('Listening at http://localhost:'+devport);
});
