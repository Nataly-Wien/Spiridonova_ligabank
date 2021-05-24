const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2)$/i,
        use: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
