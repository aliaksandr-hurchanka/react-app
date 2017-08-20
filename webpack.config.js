var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './ui/src/js/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'app.build.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    stats: {
        colors: true
    }
}
