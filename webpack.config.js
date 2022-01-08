const path = require('path');

module.exports = {
    entry: './app_src/index.js',
    mode: 'production',
    target: 'web',
    output: {
        filename: 'v_app.js',
        path: path.resolve(__dirname, 'public/js'),
    },
};
