const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public/scripts'),
    filename: 'app.js',
  },
};
