var webpack = require('webpack');
var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        path : path.resolve(__dirname,'public/index.html'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-2']
                }
            },
            {
                test: /\.sass$/,
                loader: ['style-loader','css-loader','sass-loader'] 
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}