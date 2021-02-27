// import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';
const __dirname = path.resolve();

export default {
	mode: 'development',
	entry: './src/client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
				resolve: {
					fullySpecified: false
				}
			}
		]
	}
};
