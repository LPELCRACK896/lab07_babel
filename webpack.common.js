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
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              } 
        ]
    }
}