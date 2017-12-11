//创建webpack.config.js
var webpack = require('webpack');
module.exports = {
     entry:{//入口文件
        index : './src/index.jsx'
     },
     output: {
        filename: './dist/bundle.js'
      },
     module:{
         loaders: [
             {test: /\.css$/, loader: 'style-loader!css-loader'},
              { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
               {
                  test: /\.js[x]?$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader?presets[]=es2015&presets[]=react',
                },
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