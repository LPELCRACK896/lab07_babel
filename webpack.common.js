const path  = require('path')
module.exports  = {
    entry:
     {
         main: "./src/index.js",
/*          book: "./src/book-entry-point.js" 
 */    },
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