const path  = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common")
const {merge}  = require("webpack-merge")

module.exports  = merge(common, {
    mode: "production",
    output:{
        filename: "index.bundle.[contenthash].js",
        path: path.resolve(__dirname, "bundle")
    }
 
});