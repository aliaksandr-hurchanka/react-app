var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './ui/src/js/index.js',
        styles: './ui/src/styles/less/index.less'
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
            },
            {
                test: /\.css/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/, loader: "css-loader!less-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    stats: {
        colors: true
    }
}
