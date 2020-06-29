const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        index: './src/index.tsx',
    },
    mode:   isProd ? 'production' : 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test:    /\.tsx?$/,
                use:     'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                use:  ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(pdf|jpg|png|svg|woff|woff2|eot|ttf|svg)$/,
                use:  'file-loader',
            },
        ],
    },
    output: {
        filename:   '[name].js',
        path:       resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title:    'stephencheung',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};

if (isProd) {
    config.optimization = {
        minimizer: [
            new TerserWebpackPlugin(),
        ],
    };
} else {
    // for more information, see https://webpack.js.org/configuration/dev-server
    config.devServer = {
        compress:           true,
        historyApiFallback: true,
        hot:                true,
        open:               true,
        overlay:            true,
        port:               9000,
        stats:              'errors-only',
    };
}

module.exports = config;
