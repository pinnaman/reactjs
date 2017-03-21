const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: ["./global.js", "./src/index.js"],
  //entry: "./app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    publicPath: "/assets/"
  },

  module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ]
  },

 module: {
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },

resolve: {
  extensions: ['.js', '.es6'],
  modules: [
    path.resolve('./node_modules')
  ]
},

  watch: true


}
