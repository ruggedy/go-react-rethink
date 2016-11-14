'use strict';

const webpack = require('webpack');
const p = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

const cssLoaders = [
	{
		loader: 'css-loader',
		options: { modules: true }
	},
	{
		loader: 'postcss-loader',
		options: {
			plugins: function () {
				return [
					require('postcss-smart-import'),
					require('precss'),
					require('autoprefixer')
				];
			}
		}
	},
	{
		loader: 'sass-loader'
	}

]

const imageLoaders = [
	
]


exports.setupCSS = function (paths) {
	return {
		module: {
			loaders: [
				{
					test: /^((?!\.global).)*scss$/, 
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							query: {
								modules: true,
								localIdentName: '[name]__[local]--[hash:base64:5]',
								importLoaders: 1
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					include: paths
				},
				{
					test: /\.global.scss$/ , 
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					include: paths
				}
			]
		}
	};
}

exports.minify = function () {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				output: {
					comments: false
				},
				compressor: {
					warnings: false
				}
			})
		]
	}
}

exports.setFreeVariable = function (key, value) {
	const env = {}
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	}
}

exports.extractBundle = function (options) {
	const entry = {};
	entry[options.name] = options.entries;

	return {
		entry: entry,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name, 'manifest'],
				minChunks: Infinity
			})
		]
	}
}

exports.clean = function (path) {
	return {
		plugins: [
			new CleanWebpackPlugin(path, {
				root: process.cwd()
			})
		]
	}
}

exports.extractCSS = function (paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract({
						fallbackLoader: 'style-loader',
						loader: cssLoaders,
						include: paths
					})
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		]
	};
}

exports.purifyCSS = function (paths) {
	return {
		plugins: [
			new PurifyCSSPlugin({
				basePath: process.cwd(),
				paths: paths
			})
		]
	}
}

exports.loadImages = function (paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loaders: [
						'url-loader?limit=50000&hash=sha512&digest=hex&name=[path][hash].[ext]?[hash]',
            			'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
					],
					include: paths
				}
			]
		}
	}
}


