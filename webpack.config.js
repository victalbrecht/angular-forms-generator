const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		filename: 'bundle.min.js',
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
			filename: 'styles.min.css',
			path: path.resolve(__dirname, 'dist')
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 80,
		watchContentBase: true
	}
}