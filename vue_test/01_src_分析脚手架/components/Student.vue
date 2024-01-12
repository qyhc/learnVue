<template>
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{age}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    name: 'MyStudent',
    data() {
        return {
            name: '张三',
            age:18

            }
    },
    methods: {
        showName() {
                alert(this.name)
            }
        }
    }
</script>

