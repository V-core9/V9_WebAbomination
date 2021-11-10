const path = require('path');

module.exports = {
  entry: './WEB/client/source/index.js',
  mode: "development",
  target: "web",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '/WEB/client/public'),
  },
};
