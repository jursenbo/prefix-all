const generateData = require('inline-style-prefixer/generator')
const browserList = require('./browserList')

generateData(browserList, {
  staticPath: `${__dirname}/prefixData/static.js`,
  compatibility: true
})
