/**
 *
 *  开发环境配置文件
 *
 */
var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')
var merge = require('webpack-merge')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var webpackConfig = {
  devtool: 'source-map',
  plugins: [
    new ProgressBarPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './site',
    hot: true,
    inline: true
  }
}

module.exports = merge(baseConfig, webpackConfig)
