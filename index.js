const createPrefixer = require('inline-style-prefixer/static/createPrefixer')
const staticData = require('./prefixData/static')

module.exports = createPrefixer(staticData)
