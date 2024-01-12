<template>
    <div >
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import {hunhe,hunhe2} from '../mixin'
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
            x:666
        };
    },
    mounted(){
        console.log('你好啊啊啊啊啊啊');
    },
    mixins:[hunhe,hunhe2]

}
</script>


