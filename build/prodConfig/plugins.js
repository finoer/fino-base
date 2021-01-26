const commonPlugins = require('../commonPlugins')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new CopyWebpackPlugin(
    {
      patterns: [
        {
          from: './src/img',
          to: './img'
        },
        {
          from: './src/static',
          to: './static'
        },
      ]
    }
  )
]

const pluginsConfig = [...commonPlugins, ...prodPlugins]

module.exports = pluginsConfig
