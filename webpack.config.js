const { resolve, join } = require( 'path' );

module.exports = {

  mode: 'production',
  
  resolveLoader: {
    alias: {
      'preserve-whitespace': resolve( __dirname, 'index.js?preserveWhitespace' ),
      'wrap-output': resolve( __dirname, 'index.js?wrapOutput' )
    }
  },

  resolve: {
    modules: [
      join( __dirname, 'test/fixtures' ),
      'node_modules'
    ],
    extensions: [
      '.js',
      '.dust'
    ],
    alias: { dustjs: 'dustjs-linkedin' }
  },

  module: {
    rules: [ {
      test: /\.dust$/,
      exclude: /node_modules/,
      loader: resolve( __dirname, 'index' ),
      options: {
        root: 'test/fixtures',
        verbose: true
      }
    } ]
  }
};