import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip=false
Vue.prototype.x = {a:1,b:2}

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus=this  //安装全局事件总线
    }
})
