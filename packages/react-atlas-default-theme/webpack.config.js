var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    publicPath: '/lib/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [ {
                       loader: 'css-loader',
                       query: {
                           modules: true,
                           importLoaders: 1,
                           localIdentName: 'ra_[name]__[local]',
                           minimize: true
                       }
                     },
                     'postcss-loader'
                     ]
                })
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, 
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, 
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, 
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader"
    }, 
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }],
  },
  plugins: [
    new ExtractTextPlugin("atlasThemes.min.css"),
  ]
};