const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		filename: 'bundle[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 3000
	},
	plugins: [
		new HTMLPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@assets': path.resolve(__dirname, 'src', 'assets'),
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@containers': path.resolve(__dirname, 'src', 'containers'),
		}
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				]
			}
		],
	},
};