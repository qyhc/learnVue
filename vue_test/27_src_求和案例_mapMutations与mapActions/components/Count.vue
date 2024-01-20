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

        <!-- 对应：mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法） -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>

        <!-- 对应mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法） -->
        <!-- <button @click="JIA(n)">+</button> -->
        <!-- <button @click="JIAN(n)">-</button> -->

        <!-- 对应：借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法） -->
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

        <!-- 对应：借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法） -->
        <!-- <button @click="jiaOdd(n)">当前求和为奇数再加</button> -->
        <!-- <button @click="jianWait(n)">等一等再加</button> -->
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    computed: {

        ...mapState({ 'he': 'sum', 'xuexiao': 'school', 'xueke': 'subject' }),

        ...mapGetters(['bigSum'])


    },
	mounted() {
        // console.log('Count',this);
        // 可以将键简写去掉单引号：mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        const x = mapState({ 'he': 'sum', 'xuexiao': 'school', 'xueke': 'subject' })
        console.log('mapState',x);
	},
    methods: {
        // 程序员亲自写的方法
        // increment() {
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN',this.n)
        // },
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        // 注意：调用触发函数方法哪里需要加上参数否则出错
        ...mapMutations({'increment':'JIA','decrement':'JIAN'}),

        // 程序员亲自写的方法
        // JIA() {
        //     this.$store.commit('JIA',this.n)
        // },
        // JIAN() {
        //     this.$store.commit('JIAN',this.n)
        // },
        // // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
        // 注意：调用触发函数方法哪里需要加上参数否则出错
        // 生成名为JIA的函数并commit 'JIA'参数，生成名为JIAN的函数并commit 'JIAN'参数
        // ...mapMutations(['JIA','JIAN']),

        //******************************************************** */

        // incrementOdd() {
        //     // this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWait',this.n)
        // },
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
        ...mapActions({ 'incrementOdd': 'jiaOdd', 'incrementWait': 'jiaWait' }),

        // jiaOdd() {
        //     // this.$store.dispatch('jiaOdd',this.n)
        // },
        // jianWait(){
        //     this.$store.dispatch('jiaWait',this.n)
        // },
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
        // ...mapActions(['jiaOdd','jiaWait']),

    },

}
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>

