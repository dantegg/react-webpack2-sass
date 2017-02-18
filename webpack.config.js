/**
 * Created by dantegg on 17-2-18.
 */
var path = require('path')

module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/static/'
    },

    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015','react-hmre']
            }
        },{
            test:/\.scss/,
            loader:'style-loader!css-loader!sass-loader'
        }]
    }

}