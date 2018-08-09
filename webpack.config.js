const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isDev = argv && argv.mode === 'development'

  return {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : 'source-map',
    entry: {
      app: ['./src/app.js']
    },
    output: {
      filename: './assets/js/app.js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(jsx|js)?$/,
          loader: 'standard-loader',
          exclude: /(node_modules|bower_components)/,
          options: {
            error: false,
            snazzy: true,
            parser: 'babel-eslint'
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:6]',
                minimize: { safe: true }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: './assets/css/[name].css',
        chunkFilename: './assets/css/[id].css'
      })
    ]
  }
}
