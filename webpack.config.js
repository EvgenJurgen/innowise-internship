const path = require('path');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devServer:{
		static:'./dist',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
		ignored: /node_modules/,
		stdin: true,
	},
};
