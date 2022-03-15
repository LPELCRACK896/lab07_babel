const path  = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common")
const {merge}  = require("webpack-merge")
module.exports  = merge(common, {
    mode: "development",
    output:{
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "bundle")
    }
});