<template>
    <div class="row">
        <!-- 展示用户列表 -->

        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">xxxxxx</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">加载中..</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg:'',
                users: []
            }
        };
    },
    mounted() {
        this.$bus.$on('updateListData', (dataObj) => {
            // console.log('我是List组件，接收到了数据：',users);
            // this.info = { ...this.info, ...dataObj } //用新数据：dataObj与原本数据this.info合并：
            console.log(dataObj);
            // this.info有的而dataObj没有的数据则采用info的数据
            // info与dataObj都有的数据则用dataObj的替换info数据
        })
    },
}
</script>

<style scoped>
	.album {
	min-height: 50rem; /* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
	}

	.card {
	float: left;
	width: 33.333%;
	padding: .75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
	}

	.card > img {
	margin-bottom: .75rem;
	border-radius: 100px;
	}

	.card-text {
	font-size: 85%;
	}
</style>
