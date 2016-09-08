import webpack from 'webpack'
import cssnano from 'cssnano'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export const PORT = 3000
export default {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    `${__dirname}/src/main.js`
  ],
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/dist`,
    publickPath: '/'
  },
  module: {
    loaders: [
      { test: /jsx?$/, loader: 'react-hot!babel', include: `${__dirname}/src` },
      { test: /styl$/, loader: 'style!css?modules&localIdentName=[local]-[hash:base64:5]!postcss!stylus' },
      { test: /css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    root: `${__dirname}/src`,
    extends: ['web.js', '.js', '.jsx']
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
      safe: true,
      sourcemap: true
    })
  ],
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HTMLWebpackPlugin({
      template: `${__dirname}/src/index.tpl.html`,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
