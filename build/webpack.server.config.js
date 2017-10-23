const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  // 指定生成后的运行环境在node
  target: 'node',
  // 设置代码调试map
  devtool: '#source-map',
  // 配置编译的入口文件
  entry: './src/entry-server.js',
  // 设置输出文件名，并设置模块导出为commonjs2类型
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  // 在alias设置好服务端数据请求API为create-api-server.js模块
  resolve: {
    alias: {
      'create-api': './create-api-server.js'
    }
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  // 设置不打包排除规则
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    //设置VueSSRServerPlugin插件
    new VueSSRServerPlugin()
  ]
})
