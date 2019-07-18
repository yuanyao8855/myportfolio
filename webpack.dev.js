const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3000,
      },

      output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
      },
});