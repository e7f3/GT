import path from 'path'
import { Configuration, RuleSetRule, DefinePlugin } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

module.exports = ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ]
  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')

  config.module!.rules!.push(buildCssLoader(true))

  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __PROJECT__: JSON.stringify('storybook'),
    })
  )

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  return config
}
