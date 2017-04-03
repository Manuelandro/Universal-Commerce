const path = require('path')
const webpack = require('webpack')
const isDebug = !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose')


module.exports = {
    name: 'client',
    target: 'web',
    entry: {
        client: ['babel-polyfill', './index.web.js']
    },
    output: {
        path: path.resolve(__dirname, '../build.web/public/'),
        filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js',
        chunkFilename: isDebug ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, '../src')
                ],
                query: {
                    cacheDirectory: isDebug,
                    babelrc: false,
                    presets: [
                        // A Babel preset that can automatically determine the Babel plugins and polyfills
                        ['env', {
                            targets: {
                                browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
                            },
                            modules: false,
                            useBuiltIns: false,
                            debug: false
                        }],
                        'stage-2',
                        'react',
                        ...isDebug ? [] : ['react-optimize']
                    ],
                    plugins: [
                        ...isDebug ? ['transform-react-jsx-source'] : [],
                        ...isDebug ? ['transform-react-jsx-self'] : []
                    ],
                },
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: isDebug,
                            modules: true,
                            localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                            minimize: !isDebug,
                            discardComments: { removeAll: true },
                        },
                    },
                ],
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
            'process.env.BROWSER': true,
            __DEV__: isDebug,
        }),
        ...isDebug ? [] : [
            // https://github.com/mishoo/UglifyJS2#compressor-options
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    screw_ie8: true, // React doesn't support IE8
                    warnings: isVerbose,
                    unused: true,
                    dead_code: true,
                },
                mangle: {
                    screw_ie8: true,
                },
                output: {
                    comments: false,
                    screw_ie8: true,
                },
            }),
        ],
    ].filter(Boolean),
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: isDebug ? 'cheap-module-source-map' : false,
    bail: !isDebug,
    cache: isDebug,
    stats: {
        colors: true,
        reasons: isDebug,
        hash: isVerbose,
        version: isVerbose,
        timings: true,
        chunks: isVerbose,
        chunkModules: isVerbose,
        cached: isVerbose,
        cachedAssets: isVerbose,
    },
    // https://github.com/webpack/node-libs-browser/tree/master/mock
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
}
