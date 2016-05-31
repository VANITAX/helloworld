'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client?reload=true',
    // your code:
    './src/root'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/style.css'),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', 'scss' , 'css' , 'json']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 
          'css-loader!sass-loader?includePaths[]=' 
          + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        )
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
          // 'image-webpack?{progressive:true, optimizationLevel: 10, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader?limit=1024&name=fonts/[name].[ext]" 
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/sass/")]
  },
};
