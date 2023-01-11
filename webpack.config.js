const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // devtool: isDev ? 'eval' : false,
  entry: './src/index.ts', 
  mode: 'development',  
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      { test: /\.txt$/, 
        use: 'raw-loader' },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },         
          'source-map-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          
          'source-map-loader'
        ],
      },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|eot|woff2)$/,
        use: 'file-loader',
      },
    
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".jpg" ]
  },
};