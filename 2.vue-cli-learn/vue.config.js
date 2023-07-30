module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js',
    },
  },

  lintOnSave: false,//关闭语法检查
  //开启代理服务器(方式一)
  /*devServer:{
      proxy: 'http://localhost:5000', 
      //将请求转发给端口号5001，注意这里
      //①只能配置单个代理，不能配置多个代理
      //②不能灵活的控制请求是否走代理
  }*/
  //开启代理服务器(方式二) 多个代理
  devServer: {
    proxy: {
      //当请求的前缀是api，直接转发请求到服务器5001端口
      '/api1': {
        target: 'http://localhost:5000',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中host的值
        pathRewrite: {
          //把请求中含有的api替换成空字符串
          '^/api1': '',
        }
      },
      '/api2': {
        target: 'http://localhost:5001',
        //不写 ws和changeOrigin默认为true
        pathRewrite: {
          '^/api2': '',
        }
      }
    }
  }
}