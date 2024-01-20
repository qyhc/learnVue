<template>
    <div>
        <h1>当前求和为：{{ he }}</h1>
        <h3>当前学校为：{{ xuexiao }}</h3>
        <h3>当前学科为：{{ xueke }}</h3>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    computed: {

        // 靠程序员自己去写计算属性：he、xuexiao、xueke
        // he() {
        //     return this.$store.state.sum
        // },
        // xuexiao() {
        //     return this.$store.state.school
        // },
        // xueke() {
        //     return this.$store.state.subject
        // },
        // 借助mapState生成计算属性，从state中读取数据。（对象写法）
        // 具体的需要提供：键-所需生成的函数名、值：返回的$store.state.中的数值
        // ...被用于将对象或数组进行展开，以便将其内容合并到另一个对象或数组中(展开并合并覆盖)
        ...mapState({ 'he': 'sum', 'xuexiao': 'school', 'xueke': 'subject' }),

        // 靠程序员自己去写计算属性：sum、school、subject
        // sum() {
        //     return this.$store.state.sum
        // },
        // school() {
        //     return this.$store.state.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },
        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        // 当键的名字与存储值的变量相同时可以使用下面的简写形式：
        // ...mapState(['sum', 'school', 'subject'])
        // 但是不能用下面的形式：因为值是字符串类型而不是一般的属性类型
        // ...mapState({ sum, school, subject}),
        // 扩展：
        // 正确对象简写形式：let a = 10 let obj = {a:a} 等价于 let obj={a}
        // 错误对象简写形式： let obj = {a:'a'} 等价于 let obj={a}


        // ********************************************************************
        // bigSum() {
        //     return this.$store.getters.bigSum
        // },
        // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({'bigSum':'bigSum'})
        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])


    },
	mounted() {
        // console.log('Count',this);
        // 可以将键简写去掉单引号：mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        const x = mapState({ 'he': 'sum', 'xuexiao': 'school', 'xueke': 'subject' })
        console.log('mapState',x);
	},
    methods: {
        increment() {
            this.$store.commit('JIA',this.n)
        },
        decrement() {
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        },
    },

}
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>

