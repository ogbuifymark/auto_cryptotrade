const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

const config = {
    entry:  __dirname + '/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
//     target: 'node',

};
module.exports = config;

module: {
  rules: [
    {
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'

    }
  ]
}
