<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{sex}}</h2>
        <button @click="sendStudentName">把学生名字发送给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例对象(vc)</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '障碍是你',
            sex:'男'
        };
    },
    methods: {
        sendStudentName() {
            // 触发student组件实例对象身上的atguigu事件
            this.$emit('atguigu', this.name, 1, 2, 3, 4);
            // this.$emit('click')
            // this.$emit('demo');
        },
        unbind() {
            this.$off('atguigu') //解绑一个自定义事件
            // this.$off(['atguigu','demo']) //解绑多个自定义事件
            // this.$off() //解绑所有自定义事件
        },
        death() {
            this.$destroy()//销毁了当前Student组件的实例对象
        }
    },
}
</script>

<style scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>
