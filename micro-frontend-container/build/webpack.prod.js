/**
 * Created by iSmile on 1/24/2020.
 */
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:{ 
        "container" :["@babel/polyfill", "./src/index.js"]
    },
    mode: "production",
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
    plugins: [new webpack.HotModuleReplacementPlugin()]
};