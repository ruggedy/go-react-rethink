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
        path.join(__dirname, 'src', 'main.scss')
    ],
    assets: path.join(__dirname, 'src', 'assets', '**'),
    html: path.join(__dirname, 'src', 'index.html')
};

const common = {
    entry: {
        app: PATHS.app,
        style: PATHS.style
    },
    resolve: {
        modules: [PATHS.app, 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                },
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
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
                    new webpack.optimize.DedupePlugin()
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
                entry: {
                    main: [
                        'react-hot-loader/patch'
                    ]
                },
                output: {
                    path: PATHS.build,
                    filename: "[name].js",
                    sourceMapFilename: "[name].map",
                    chunkFilename: "[id].chunk.js"
                },
                plugins: [
                    new webpack.SourceMapDevToolPlugin({
                        test: /\.jsx?$/,
                        include: PATHS.app
                    })
                ]
            },
            parts.setupCSS(PATHS.app),
            server.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
        break;
}


module.exports = config
