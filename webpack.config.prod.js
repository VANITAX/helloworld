var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/root'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: './public'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('css/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: [
          'babel'
        ],
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
        test: /.*\.(gif|png|jpe?g|svg)$/,
        loaders: [
          'url-loader?limit=0',
          // 'url-loader?limit=262144',
          // 'file?hash=sha512&digest=hex&name=images/[hash].[ext]', // 這行暫時有路徑上的錯誤所以先註解
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
