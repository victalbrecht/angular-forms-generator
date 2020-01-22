const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		filename: 'main.[hash].js',
		path: path.resolve(__dirname, 'dist')
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
			filename: 'main.[hash].css',
			path: path.resolve(__dirname, 'dist')
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 80,
		watchContentBase: true
	}
}