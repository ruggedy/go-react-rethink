const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const validate = require('webpack-validator');
const server = require('./settings/devServer');
const parts = require('./settings/loaders');

// const devServer = require('./webpack/devServer');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build'),
	vendor: path.join(__dirname, 'src', 'vendor.js'),
	style: [

	],
	assets: path.join(__dirname, 'src', 'assets'),
	html: path.join(__dirname, 'src', 'index.html'),
	index: path.join(__dirname, 'src', 'index.jsx')
};

const common = {
	entry: {
		app: [
			'babel-polyfill',
			'react-hot-loader/patch',
			PATHS.index
		],
		style: PATHS.style
	},
	resolve: {
		symlinks: false,
		modules: [
			PATHS.app,
			path.resolve(__dirname, '..', 'node_modules'),
			'node_modules'
		],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		plugins: [

		]
	},
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: [
					'babel-loader'

				],
				include: path.resolve(__dirname, "src")
			},
			{
				test: /\.ts(x?)$/,
				use: [
					'babel-loader',
					'ts-loader',
				],
				include: path.resolve(__dirname, "src")
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Boiler',
			template: PATHS.html,
			inject: true
		})
	]
}

var config;

switch (process.env.npm_lifecycle_event) {
	case 'build':
	case 'stats':
		config = merge(
			common,
			{
				output: {
					path: PATHS.build,
					publicPath: '/',
					filename: "[name].[chunkhash].js",
					chunkFilename: "[chunkhash].js"
				}
			},
			{
				devtool: 'source-map'
			},
			parts.clean([PATHS.build]),
			parts.setFreeVariable(
				'process.env.NODE_ENV',
				'production'
			),
			{
				plugins: [

				]
			},
			parts.extractBundle({
				name: 'vendor',
				entries: PATHS.vendor
			}),
			parts.minify(),
			parts.extractCSS(PATHS.style),
			parts.purifyCSS([PATHS.app]),
			parts.loadImages(PATHS.assets)

		);
		break;

	default:
		config = merge(
			common,
			{
				output: {
					path: PATHS.build,
					publicPath: '/',
					filename: "[name].[hash].js",
					sourceMapFilename: "[name].[hash].map",
					chunkFilename: "[id].chunk.js"
				},
				plugins: [
					new webpack.SourceMapDevToolPlugin({
						test: /\.jsx?$/,
						include: PATHS.app
					}),
					new webpack.DefinePlugin({
						__DEV__: process.env.NODE_ENV !== 'production',
						__TEST__: JSON.stringify(process.env.TEST || false),
						'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
					})
				]
			},
			parts.setupCSS(PATHS.app),
			parts.loadImages(PATHS.assets),
			server.devServer({
				host: process.env.HOST,
				port: process.env.PORT
			})
		);
		break;
}


module.exports = config
