const path = require('path');

module.exports = {
    entry: './application/index.js',
    mode: 'production',
    target: 'web',
    output: {
        filename: 'v_app.js',
        path: path.resolve(__dirname, 'public/js'),
    },
};
