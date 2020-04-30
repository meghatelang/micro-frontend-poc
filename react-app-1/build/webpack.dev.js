/**
 * Created by iSmile on 1/24/2020.
 */
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        "react-app-1":["@babel/polyfill", "./src/index.js"]
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: [path.join(__dirname, "../public/"), path.join(__dirname, "../dist/")],
        port: 3002,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        historyApiFallback: {
            index: 'index.html'
        },
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};