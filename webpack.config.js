/*eslint no-path-concat: "error"*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			include: [
				path.resolve(__dirname, 'app')
			],
			exclude: [
				path.resolve(__dirname, 'node_modules')
			],
			use: {
				loader: 'babel-loader'
			},
		},{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true
					}
				}, {
					loader: 'postcss-loader'
				}
			]
		}]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css']
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './public',//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'app/index.tmpl.html')//new 一个这个插件的实例，并传入相关的参数
		})
	],
};