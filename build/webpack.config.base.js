/**
 * generate demo
 */
var path = require('path')
var pkg = require('../package.json')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')
var helpers = require('./helpers')

module.exports = {
  entry: {
    app: './demo/main.js'
  },

  output: {
    path: path.resolve(__dirname, '../site'),
    filename: '[name].js'
  },

  resolve: {
    fallback: [path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../demo'),
      'views': path.join(__dirname, '../demo/views'),
      'assets': path.join(__dirname, '../demo/assets'),
      'actions': path.join(__dirname, '../demo/vuex/actions')
    }
  },

  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ].concat(helpers.loaderStyles())
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        title: pkg.name,
        filename: 'index.html',
        template: path.join(projectRoot, 'demo/assets/index.jade'),
        inject: true
      }
    )

  ],

  vue: {
    loaders: Object.assign({
      js: 'babel',
      autoprefixer: {
        browsers: ['iOS >= 7', 'Android >= 4.1']
      }
    }, helpers.vueStyles())
  },

  sassLoader: {
    includePaths: [
      path.join(projectRoot, 'demo/assets/sass')
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
