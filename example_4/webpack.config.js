var webpack = require('webpack')
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        commons: ['./src/js/jquery.js', './src/js/module.js',
            './src/js/module2.js'
        ],
        style: ['./src/css/style.css', './src/css/style2.css'],
        entry1: './src/js/entry1.js',
        index1: './src/css/index1.css',
        entry2: './src/js/entry2.js',
        index2: './src/css/index2.css'
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
            loader: ExtractTextPlugin.extract('style-loader',
                    'css-loader') // just extract the raw text from css file, not transfer to js resourc
        }, {
            test: /\.(jpg|png)$/,
            // loader: 'url-loader?limit=8192'  //rename image using hash
            loader: 'file?name=img/[name].[ext]'
        }, {
            test: /\.(html)$/,
            loader: 'file?name=page/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Ethan'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/commons.js',
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({ // enable this plugin for production package
            compress: {
                warnings: false
            }
        })
    ]
};
