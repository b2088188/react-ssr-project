import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.mjs';
import path from 'path';
const __dirname = path.resolve();

const config = {
	mode: 'development',
	entry: './src/client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

export default merge(baseConfig, config);
