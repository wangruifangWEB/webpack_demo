//创建webpack.config.js
var webpack = require('webpack');
module.exports = {
     entry:{//入口文件
        index : './src/index.js', 
        index02 : './src/index02.js'
     },
     output: {
        filename: './dist/[name].js'
      },
     module:{
          loaders:[
               {
                   test:/\.css$/,//支持正则
                   loader:'style-loader!css-loader'
               }
          ]
     },
    //其他解决方案配置
   /* resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },
     //插件
     plugins:[
          new webpack.BannerPlugin('This file is created by ly')
     ]*/
}