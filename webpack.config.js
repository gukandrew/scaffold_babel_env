const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  node: {
    __dirname: false,   // without this line __dirname returns / or blank string
    __filename: false,  // without this line __filename returns / or blank string
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/static', to: 'static' }
    ])
  ]
}
