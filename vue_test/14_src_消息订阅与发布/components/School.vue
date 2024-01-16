<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- <button @click="sendStudentName">把学生名给School组件</button> -->
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        };
    },
    methods: {
        demo(msgName, data) {
            console.log('hello消息收到了', data);
            console.log(this);
        }
    },
    mounted() {
        // 给School组件绑定 hello事件
        // 接收student传输过来的name信息
        // this.$bus.$on('hello', (data) => {
        //     console.log('我是School组件，收到了数据',data);
        // })

        // 绑定订阅
        // 由于pubsub.subscribe是第三方库，所以要注意函数里的this指向不是Vue
        // 所以要写成箭头函数或者是学成methods中的普通方法。
        // this.pubId = pubsub.subscribe('hello',(msgName,data)=> {
        //     console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
        // })
        // 或者
        this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy() {
        // this.$bus.$off('hello')

        // 订阅解绑
        pubsub.unsubscribe(this.pubId)
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
