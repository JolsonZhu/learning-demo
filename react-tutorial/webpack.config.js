var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './components/FilterableProductTable.jsx',
	output: {
		path: __dirname,
		filename: 'bunder.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
