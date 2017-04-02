var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');
module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'app': './app/main.ts',
        'polyfills' : './app/polyfills.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/static',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
       rules: [
        {
            test: /\.ts$/,
            loaders: [{
                loader: 'awesome-typescript-loader',
                options: { configFileName: helpers.root('tsconfig.json') }
            } , 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.css$/,
            exclude: helpers.root('./app','components'),
            loader: "style-loader!css-loader"
        },
        {
            test: /\.css$/,
            exclude: helpers.root('./app','styles.css'),
            use: ['raw-loader']
        }
       ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
          // The (\\|\/) piece accounts for path separators in *nix and Windows
          /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
          helpers.root('./static'), // location of application source code
          {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
          names: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('./app/styles.css'),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            },
            debug: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        contentBase: './static',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};