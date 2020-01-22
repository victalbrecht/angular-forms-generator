const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
	module: {
		rules: [
			{
				test: [/\.sass$/],
				use: [{ loader: MiniCSSExtractPlugin.loader }, 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		],
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: '[name].[hash].css',
			path: path.resolve(__dirname, 'dist')
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/assets/favicon.png'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 80,
		watchContentBase: true
	}
}