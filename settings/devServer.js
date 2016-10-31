const webpack = require('webpack');
const path = require('path');

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build'),
	vendor: path.join(__dirname, 'src', 'vendor.js'),
	style: [
		path.join(__dirname, 'src', 'main.scss')
	],
	assets: path.join(__dirname, 'src', 'assets', '**')
};

exports.devServer = function (options) {
	return {
		devServer: {
			port: options.port,
			host: options.host,
			historyApiFallback: true,
			watchOptions: {
				aggregateTimeout: 300,
				poll: 1000
			},
			outputPath: PATHS.build + "/",
			inline: true,
			hot: true,
			stats: {
				hash: false,
				version: false, // webpack version
				timings: false, // show build compilation time (already shown)
				assets: true,
				chunks: false, // verbose output
				modules: false, // similar to chunks
				reasons: true,
				children: false,
				source: true,
				errors: true,
				errorDetails: true,
				warnings: true,
				publicPath: true
			}
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	}
}