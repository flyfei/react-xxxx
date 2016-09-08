import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig, { PORT } from './webpack-dev-config'

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, () => console.log(`http://0.0.0.0:${PORT}`))
