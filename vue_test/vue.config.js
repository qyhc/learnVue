const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查

  // 开启配置代理（方式一）
  // devServer: {
  //   proxy:'http://localhost:5000'
  // },

  // 开启配置代理（方式二）
  devServer: {
    proxy: {
      '/atguigu': { //如果请求头不是/atguigu则不会走代理
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},  //重写路径：将/atguigu改成空字符串
        ws: true, //用于支持websocket
        changeOrigin: false //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},  //重写路径：将/demo改成空字符串
        ws: true, //用于支持websocket
        changeOrigin: false //用于控制请求头中的host值
      },
    }
  }
})
