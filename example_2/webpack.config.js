var webpack = require('webpack')
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        entry1: './src/js/entry1.js',
        entry2: './src/js/entry2.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            //loader: 'style!css'
            loader: 'style!css'
        }, {
            test: /\.(jpg|png)$/,
            // loader: 'url-loader?limit=8192'  //rename image using hash
            loader: 'file?name=img/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Ethan'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'libs',
            filename: 'js/commons.js',
        }),
        new webpack.optimize.UglifyJsPlugin({ // enable this plugin for production package
            compress: {
                warnings: false
            }
        })
    ]
};
