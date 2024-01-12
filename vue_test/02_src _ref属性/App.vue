<template>
    <div>
        <School/>
        <School/>
        <h2 v-text="msg" ref="title"></h2>
        <button @click="showDOM" ref="btn">点我输出上方DOM元素d</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components: { School },
    data() {
        return {
            msg: '欢迎学习',
        };
    },
    methods: {
        showDOM() {
            // console.log('@@');
            console.log(this.$refs.title); //真实DOM元素
            console.log(this.$refs.btn);//真实DOM元素
            console.log(this.$refs.sch);//school组件的实例对象（vc）
        }
    },
}
</script>

<style>

</style>
