const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve (dir) {
  return path.join(process.cwd(), dir)
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: './example/main.js',
  output: {
    path: resolve('./example/dist'),
    filename: '[name].[hash:7].js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      'source': resolve('./src'),
      '@': resolve('./example/src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    publicPath: '/',
    port: 8085,
    quiet: true,
    hot: true,
    open: true,
    openPage: 'affix-example'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|jsx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('babel.config.js')
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: false,
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return
        }
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          subtitle: error.file || ''
        })
      }
    })
  ],
  optimization: {
    minimizer: []
  },
  devtool: '#eval-source-map'
};

module.exports = webpackConfig;