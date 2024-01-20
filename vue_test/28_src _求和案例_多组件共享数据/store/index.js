// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
const actions = {
    // jia(context,value) {
    //     console.log('actions中的jia被调用了', context, value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     console.log('actions中的jian被调用了', context, value);
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了', context, value);
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了', context, value);
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

// 准备mutations--用于操作数据（state）
const mutations = {
    JIA(state,value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.sum += value
    },
    JIAN(state,value) {
        console.log('mutations中的JIAN被调用了', state, value);
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的ADD_PERSON被调用了', state, value);
        state.personList.unshift(value)
    }
}

// 准备state--用于存储数据
const state = {
    sum: 0, //用户的和
    school: '尚硅谷',
    subject: '前端',
    personList: [
        {id:'001',name:'张三'}
    ]
}

// 准备getters--用于将states中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

// 创建并暴露store
// 默认暴露，因为store里面只有index一个文件，所以可以用默认暴露不必使用分别暴露
export default new Vuex.Store({
    // actions: actions,
    // mutations: mutations,
    // state: state
    // 由于key与保存数据的属性名重名了，所以可以触发对象的简写形式
    actions,
    mutations,
    state,
    getters
})
