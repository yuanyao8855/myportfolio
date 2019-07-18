 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 
 module.exports = merge(common, {
   mode: 'production',
   output: {
    filename: '[name].[contenthash].js',
    publicPath: '/myportfolio/',
    path: path.resolve(__dirname, 'dist'),
  },
  
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
 });


