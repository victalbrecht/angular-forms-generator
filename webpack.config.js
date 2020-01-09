const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname)
	},
	module: {
		rules: [
			{
				test: [/\.sass$/],
				use: [{ loader: MiniCSSExtractPlugin.loader }, 'css-loader', 'sass-loader']
			},
		],
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: "[name].css"
		})
	],
	devServer: {
		port: 80,
		watchContentBase: true
	}
}