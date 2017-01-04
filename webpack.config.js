"use strict";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	devtool: "sorce-map",
	entry: "./src/js/main.js",
	output: {
		publicPath: "/",
		path: "./public",
		filename: "bundle.js",
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract(["css?sourceMap", "resolve-url", "sass?sourceMap"])
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: "file",
				query: {
					name: "[path][name].[ext]"
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin("build.css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: Infinity
		})
	],

	devServer: {
		contentBase: "./public",
		inline: true,
		host: "localhost",
		port: 3002
	}
}
