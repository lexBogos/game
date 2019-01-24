const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    openPage: './src/screens/home/index.html',
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
