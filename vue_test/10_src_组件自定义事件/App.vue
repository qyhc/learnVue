<template>
    <div class="app">
        <h1>{{ msg }}，学生名字是：{{ studentName }}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <!-- <School :getSchoolName.once="getSchoolName" /> //报错 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据(第一种写法，使用v-on或@) -->
        <!-- <Student :atguigu="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法，使用ref)-->
        <Student ref="student" @demo="m1"/>

        <!-- 给组件添加原生html事件要加native修饰符，如果不加还是会将其作为自定义事件 -->
        <!-- <Student ref="student" @click.native="show"/> -->

    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: 'App',
    data() {
        return {
            msg: '你好啊',
            studentName:''
        };
    },
    methods: {
        getSchoolName(name) {
            console.log('APP收到了学校名：',name);
        },
        // ...params 多参数写法
        getStudentName(name,...params) {
            console.log('APP收到了学生名：', name, params);
            this.studentName = name
        },
        // 测试解绑多个自定义事件
        m1() {
            console.log('demo1被调用了');
        },
        show() {
            alert(123)
        }
    },
    mounted() {
        setTimeout(() => {
            // 当挂载时绑定事件

            // 当atguigu方法被执行时，则回调函数getStudentName
            this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件

            // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件(一次性)

            // this.$refs.student.$on('atguigu', function (name, ...params) {
            //     // 这里的this是atguigu事件的触发者：Student vc实例对象 而不是App
            //     // 回调由子组件调用，所以this是子组件Student
            //     // console.log('this is : ', this);
            //     console.log('APP收到了学生名：', name, params);
            //     // 这样就出错：
            //     this.studentName = name
            //     // 但是由于在App中methods中的普通函数（没使用箭头函数）体中的this就一定指向App
            //     // 所以getStudentName方法中的this就一定指向app

            // }) //绑定自定义事件

        }, 3000);
    },
    components: { Student ,School}
}
</script>

<style scoped>
    .app{
        background-color:gray;
        padding: 5px;
    }
</style>
