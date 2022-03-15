const path  = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports  = {
    entry:
     {
         main: "./src/index.js",
         book: "./src/book-entry-point.js" 
    },
    module: {
        rules: [
            {
                test: /\.(html)$/i,
                loader: "html-loader",
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif|jfif)$/
            }     
        ]
    }
}