/**
 * @description webpack.config.js
 * @class webpack.config.js
 * @author 吴小伟(shevy) <836790625@qq.com> 2016/5/16 15:32
 */

var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  //插件项
  plugins: [commonsPlugin],
  //页面入口文件配置
  entry: {
    index : './todos/js/app.js'
  },
  //入口文件输出配置
  output: {
    path: './dist/js',
    filename: 'bundle.js'
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};

//webpack --display-error-details