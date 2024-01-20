<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red;">Count组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        };
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            console.log(personObj);
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    },
    computed: {
        personList() {
            console.log('personList',this.$store.state.personList);
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
    }
}
</script>
