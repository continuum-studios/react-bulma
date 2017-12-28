'use strict';

/***********************************************************************************************************************************************
 * @CONTINUUM/REACT-BULMA BUILD
 ***********************************************************************************************************************************************
 * @description
 */
const path = require('path');

/**
 * Webpack Config
 * @type {Object}
 */
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'react-bulma.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.js$/, loader: "babel-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(scss|sass)?$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        },
      ]
    },
    node: {
      __dirname: true,
      net: "empty",
      dns: "empty",
      fs: "empty"
    },
    resolve: {
      alias: {
        '~': path.join(__dirname, 'src')
      }
    }
};
