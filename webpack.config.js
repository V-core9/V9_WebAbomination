const path = require('path');

module.exports = {
    entry: './application/index.js',
    mode: 'development',
    target: 'web',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js'),
    },
};
