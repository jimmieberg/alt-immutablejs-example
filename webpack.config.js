var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './build/bundle.js'
	},
	resolve: {
        root: [path.join(__dirname, 'src')]
    },    
	module: {
		loaders: [
			{
				test: [/\.jsx$/, /\.js$/],
  				exclude: /node_modules/,
  				loaders: ["babel-loader"],
			}
		],
	}
};

