const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpackVisualizerPlugin = require('webpack-visualizer-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], { exclude: './static' }),
    new webpackVisualizerPlugin(),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new WebpackMd5Hash()
  ],
  output: {
    filename: 'index.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
});
