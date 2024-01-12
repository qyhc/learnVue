<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{sex}}</h2>

    </div>
</template>

<script>
    import {hunhe} from '../mixin'
export default {
    name: 'Student',
    data() {
        return {
            name: '障碍是你',
            sex:'男'
        };
    },
    mixins:[hunhe]

}
</script>

