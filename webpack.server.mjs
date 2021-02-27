import webpackNodeExternals from 'webpack-node-externals';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.mjs';
import path from 'path';
const __dirname = path.resolve();

const config = {
	mode: 'development',
	target: 'node',
	entry: './src/server.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	// Tell webpack to not bundle any libraries into output server bundle if the library exist inside the node_modules
	externals: [webpackNodeExternals()]
};

export default merge(baseConfig, config);
