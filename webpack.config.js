const path = require('path');
const webpack = require('webpack');

module.exports = {
	devServer: {
        contentBase: path.join(__dirname, 'src')
    },
	entry: {
		'./web/src/client': './index.web.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [
		    {
		    	test: /\.js$/,
		    	exclude: /(node_modules|lib)/,
		    	loaders: [
                    'react-hot',
                    'babel-loader?cacheDirectory=true'
                ],
		    	query: {
			        presets: ['es2015', 'stage-0']
			    }
		    },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: { name: '[name].[hash:16].[ext]' }
            }
		]
	},
    plugins: [
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        alias: {
            'react-native': 'react-native-web'
        }
    },
	watch: true
}