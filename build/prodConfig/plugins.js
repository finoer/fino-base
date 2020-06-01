const commonPlugins = require('../commonPlugins')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodPlugins = [

new CopyWebpackPlugin(	  
    {
        patterns: [
            {
                from: './src/img',
                to: './img'
            }
        ]
    }
 )
]

const pluginsConfig = [...commonPlugins, ...prodPlugins]

module.exports = pluginsConfig
