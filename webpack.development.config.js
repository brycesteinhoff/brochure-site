var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

const sassLoaders = [
	'css-loader',
	'postcss-loader',
	'sass-loader'
];

module.exports = {

	devtool: 'inline-source-map',

	watch: true,

	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},

	plugins: [
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }), // pass to modules
		new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
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
		// includePaths: [path.resolve(__dirname)]
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname,
			},
			{
				test: /\.s?css$/, // Match scss or css
				loader: 'style-loader!' + sassLoaders.join('!')
			}
		]
	}

};