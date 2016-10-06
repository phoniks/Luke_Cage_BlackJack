var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join( __dirname, 'public', 'javascript' ),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
