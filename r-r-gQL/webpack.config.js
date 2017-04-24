var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react', 'stage-2'] }
      }
    ],
  },
  plugins: []
};
