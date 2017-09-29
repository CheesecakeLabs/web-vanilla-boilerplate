const webpack = require('webpack')

const postCSSAutoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postCSSMixins = require('postcss-mixins')
const postCSSEach = require('postcss-each')
const postCSSVariables = require('postcss-css-variables')
const postCSSAtRulesVariables = require('postcss-at-rules-variables')
const postCSSCustomMedia = require('postcss-custom-media')
const postCSSHexRgba = require('postcss-hexrgba')
const postCSSColorFunc = require('postcss-color-function')
const postCSSEasyImport = require('postcss-easy-import')
const postCSSLost = require('lost')

module.exports = {
    plugins: [
        postCSSEasyImport(),
        postCSSAtRulesVariables(),
        postCSSVariables(),
        postCSSNested(),
        postCSSMixins(),
        postCSSEach(),
        postCSSCustomMedia(),
        postCSSAutoprefixer({ browsers: ['IE 9', 'iOS 7'] }),
        postCSSHexRgba(),
        postCSSColorFunc(),
        postCSSLost(),
    ],
}
