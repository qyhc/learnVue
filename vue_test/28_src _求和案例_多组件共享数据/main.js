import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

// 引入store
// import store from './store/index.js'
// 如果导入的文件名是vue脚手架认识的，如index.js的话，可以使用简写形式：
import store from './store'



Vue.config.productionTip=false

Vue.use(vueResource)

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    // store :'store', //触发对象简写形式
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})

// console.log(vm);
