import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import { BuildOptions } from './types/config'

export function buildPlugins({
  paths,
  isDev,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __PROJECT__: JSON.stringify(project),
    }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  return plugins
}
