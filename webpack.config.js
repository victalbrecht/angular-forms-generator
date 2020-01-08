const path = require('path');

module.exports = {
    devServer: {
        port: 80,
        watchContentBase: true
    },
    entry: path.resolve(__dirname, 'src', 'main.js'),
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname)
    },
    target: 'web'
}