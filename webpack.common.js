const path  = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports  = {
    entry: "./src/book-entry-point.js",
    plugins:[new HtmlWebPackPlugin({
        template:"./src/html-templates/book-template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader",//3. Inyecta los estilos al DOM 
                "css-loader",//2. Convierte css a common js
                "sass-loader"//1. Convierte sass a css
            ]
            },
            {
                test: /\.css$/,
                use: ["style-loader",//2. Inyecta los estilos al DOM 
                "css-loader"//1. Convierte css a common js
            ]
            }
       
        ]
    }
}