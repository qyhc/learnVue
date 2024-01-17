<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyWord: '',
        };
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                Response => {
                    // console.log('请求成功了',Response.data);
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:Response.data.items})
                },
                Error => {
                    this.$bus.$emit('updateListData', { isLoading: false, errMsg:Error.message, users:[]})
                }
            )
        }
    },
}
</script>

<style>

</style>
