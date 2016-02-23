var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

const sassLoaders = [
	'css-loader',
	'postcss-loader',
	'sass-loader'
];

module.exports = {

	entry: [
		'./index'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		new ExtractTextPlugin('style.css')
	],

	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],

	resolve: {
		extensions: ['', '.js', '.scss', '.css']
	},

	sassLoader: {
		includePaths: [path.resolve(__dirname, './assets')]
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.s?css$/, // Match scss or css
				loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
			}
		]
	}

};