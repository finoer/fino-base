const resolve = require('../utils/resolve')
const isDev = require('../utils/isDev')
const path = require('path')

console.log('----------resolve-------',path.resolve('../../packages'))

const resolveConfig = {
  extensions: ['.js', '.json', '.jsx', '.ts'],
  alias: {
    'Packs': path.resolve('../../packages')
  }
}

module.exports = resolveConfig
