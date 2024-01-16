<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
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
            // student组件给School组件发送Student的名字信息
            this.$bus.$emit('hello',this.name)
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
