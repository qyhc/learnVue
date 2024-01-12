// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

/*
  关于不同版本的Vue：
    1.vue.js与vue.runtime.xxx.js的区别
      （1）vue.js是完整版的vue，包含：核心功能+模板解析器
      （2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器
    2.因为vue.runtime.xxxjs没有模板解析器，所以不能进行new Vue中的template配置项，需要使用
      render函数去接收到createElement函数去执行具体内容

      *注意

*/

function name() {

}

// 创建vue实例对象--vm
new Vue({
  el: '#app',
  // 下面这行代码，完成了：将App组件放入容器中
  render: createElement => createElement(App),
})

// console.log(888);

