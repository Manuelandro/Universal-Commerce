const path = require('path')
const webpack = require('webpack')
const isDebug = !process.argv.includes('--release')


module.exports = {
    name: 'server',
    target: 'node',
    entry: './web/server/index.js',
    output: {
        path: path.resolve(__dirname, '../build.web/'),
        filename: 'server.js',
    },
    externals: (context, request, callback) => {
        // Externalize all npm modules.
        if (/^[a-z0-9-][a-z0-9-./]+$/.test(request)) {
        return callback(null, `commonjs ${request}`)
        }
        callback()
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: isDebug,
                    babelrc: false,
                    presets: [
                        'es2015',
                        'stage-2',
                        'react',
                        ...isDebug ? [] : ['react-optimize']
                    ],
                },
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
            }
        ],
    },
    plugins: [
        // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
            __DEV__: isDebug,
        }),
        new webpack.IgnorePlugin(/vertx/),
    ],
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: isDebug ? 'cheap-module-source-map' : false,
    bail: !isDebug,
    cache: isDebug,
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false,
    },
}
