/* eslint-disable no-var, strict, prefer-arrow-callback */

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
    cache: true,
    devtool: "",
    context: path.resolve(__dirname, "src"),
    entry: "./ts/pd.ts",
    output: {
        filename: "./sphinx_theme_pd/static/pd.js"
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
        }, {
            test: /\.sass$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"],
            })
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new ExtractTextPlugin("./sphinx_theme_pd/static/pd.css"),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJSPlugin()
    ],
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".ts", ".tsx", ".js"]
    }
}];
