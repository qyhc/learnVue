<template>
    <div>
        <!-- 父级组件传数据到子组件 -->
        <!-- age传入的字符串"18" -->
        <!-- <Student name="李四" sex="女" age="18"/> -->
        <!-- :age 相当于与v-bind，会执行双引号里面的表达式并将其结果传入 -->
        <Student/>
        <hr>
        <School/>
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: 'App',
    components: { Student ,School}
}
</script>

<style>

</style>
