const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './dist',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Capstone Group JavaScript',
      template: 'src/index.html',
    }),
  ],
  output: {
    publicPath: '/capstone-javascript/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
