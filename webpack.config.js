const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const packagejson = require('./package.json');

console.log(Object.keys(packagejson.dependencies))
module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js',
        another2: './src/another-module2.js',
        vendor: Object.keys(packagejson.dependencies)
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack 3'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'runtime'], // 指定公共 bundle 的名称。
            filename: '[name].js',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', // 指定公共 bundle 的名称。
            filename: '[name].js',
            chunks: ['app','another-module','another-module2']
        })
    ]
}

