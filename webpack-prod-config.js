const webpack = require('webpack')
const cssnano = require('cssnano')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve('./src/main.js'),
  output: {
    filename: './bundle-[hash].js',
    path: `${__dirname}/dist`,
    publickPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel',
        include: path.resolve('./src')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css?modules&localIdentName=[local]-[hash:base64:5]!postcss!stylus')
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
    ]
  },
  postcss: [
    cssnano({
      autoprefixer: {
        add: true,
        remove: true
      },
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true
    })
  ],
  resolve: {
    root: `${__dirname}/src`,
    extends: ['web.js', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true,
      compress: { warnings: false }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve('./src/index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('./style-[hash].css')
  ]
}
