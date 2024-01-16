<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- <button @click="sendStudentName">把学生名给School组件</button> -->
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        };
    },
    mounted() {
        // 给School组件绑定 hello事件
        // 接收student传输过来的name信息
        this.$bus.$on('hello', (data) => {
            console.log('我是School组件，收到了数据',data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    }

}
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>
