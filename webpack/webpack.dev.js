const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		open: true,
		port: 3000,
		proxy: {
			//set api pointing to server
			'/api': {
				target: 'http://localhost:3000',
				router: () => 'http://localhost:4000',
				logLevel: 'debug' /*optional*/,
			},
		},
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.name': JSON.stringify('vinayak'),
		}),
		new ReactRefreshWebpackPlugin(),
	],
};
