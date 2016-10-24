var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')
var merge = require('webpack-merge')
var helpers = require('./helpers')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var webpackConfig = {
  devtool: false,

  output: {
    filename: 'js/[name].[chunkhash:7].js',
    chunkFilename: 'js/[id].[chunkhash:7].js'
  },

  module: {
    loaders: helpers.loaderStyles({extract: true})
  },

  vue: {
    loaders: helpers.vueStyles({extract: true})
  },

  plugins: [
    new ProgressBarPlugin(),
    new ExtractTextPlugin('css/style.[contenthash:7].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = merge(baseConfig, webpackConfig)
