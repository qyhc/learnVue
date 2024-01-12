<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="updateAge">尝试修改接收到的年龄</button>

    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        console.log(this);
        return {
            msg: '我是学生',
            // props里的age优先级高，因此初始化data时就已经存在age属性在vc中了
            myAge:this.age
        };
    },
    methods: {
        updateAge() {
            // props所接受到的数据优先级比data的优先级高
            // 即如果属性重名的话以props的为准
            // 即先准备props再准备data
            this.myAge++
        }
    },
    // 确认要接收的数据

    //简单声明接受
    // props:['name','age','sex']

    // 接收的同时对数据类型进行限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex:String
    // }

    props: {
        name: {
            type: String,//name的类型是字符串
            required:true,//name是必要的
        },
        age: {
            type: Number,//
            defualt:99,//默认值
        },
        sex: {
            type: String,//
            required:true,//
        }
    }

}
</script>

