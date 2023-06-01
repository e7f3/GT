import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

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
    new Dotenv(),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __PROJECT__: JSON.stringify(project),
      // __API_SERVICE_KEY__: JSON.stringify(process?.env?.serviceKey),
      // __API_TEMPLATE_KEY__: JSON.stringify(apiKeys?.templateKey),
      // __API_PUBLIC_KEY__: JSON.stringify(apiKeys?.publicKey),
    }),
  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    )
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  return plugins
}
