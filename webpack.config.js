'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/main.js')
    ],
    output: {
        path: path.join(__dirname, '/lib/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {test: /\.js?$/, include: /src/, loader: 'babel'}
        ]
    }

};

module.exports = config;
