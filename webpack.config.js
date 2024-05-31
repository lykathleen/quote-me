const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  // T  ell webpack where to start bundling the javascript files
  entry: './src/index.js',
  // Define output path for the bundled file in the dist folder
  output: {
    path: __dirname + '/dist/'
  },
  module: {
    // Configure webpack to transpile files using babel before bundling
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Telling babel what to transpile - ES2015+ syntax and react code
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Config for SCSS files
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: prod ? undefined : 'source-map',
  // Tell webpack to inject the bundled file as a script tag to the HTML file
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
