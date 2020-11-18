const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 3000,
		historyApiFallback: true
	},
	plugins: [
		new HTMLPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			favicon: path.resolve(__dirname, 'src', 'assets', 'img', 'pizza-logo.svg')
		}),
		new CleanWebpackPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@assets': path.resolve(__dirname, 'src', 'assets'),
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@pages': path.resolve(__dirname, 'src', 'pages'),
			'@containers': path.resolve(__dirname, 'src', 'containers'),
			'@actions': path.resolve(__dirname, 'src', 'redux', 'actions'),
			'@reducers': path.resolve(__dirname, 'src', 'redux', 'reducers'),
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
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
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