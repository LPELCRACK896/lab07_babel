const path  = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports  = {
    entry:
     {
         main: "./src/index.js",
/*          book: "./src/book-entry-point.js" 
 */    },
    plugins:[new HtmlWebPackPlugin({
        template:"./src/html-templates/index-template.html"
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(svg|png|jpg|gif|)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"

                    }
                  }
            }     
        ]
    }
}