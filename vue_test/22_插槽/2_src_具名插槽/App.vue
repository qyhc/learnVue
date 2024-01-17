<template>
	<div class="container">
		<Category :listData="foods" title="美食">
			<img slot="center" src="https://pbs.twimg.com/media/GD9z3BZa4AAouVi?format=jpg&name=large" alt="">
			<a slot="footer" href="https://www.baidu.com">更多百度</a>
		</Category>

		<Category :listData="games" title="游戏">
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{ g }}</li>
			</ul>
			<div class="foot" slot="footer">
				<!-- 注意可以出现多个footer插槽，虽然Category中只有一个footer位置，
					但是vue会自动添加新的footer插槽位置 所以不会出现后一个插槽覆盖前一个的清空
				-->
				<a href="https://www.baidu.com">单机游戏</a>
				<a href="https://www.baidu.com">网络游戏</a>
			</div>
		</Category>

		<Category :listData="films" title="电影">
			<!-- controls显示播放按钮 -->
			<video slot="center" controls src="https://twitter.com/i/status/1747529187039035490"></video>
			<div class="foot" slot="footer">
				<a href="https://www.baidu.com">经典</a>
				<a href="https://www.baidu.com">热门</a>
				<a href="https://www.baidu.com">推荐</a>
			</div>
			<h4 slot="footer">欢迎前来观影</h4>
		</Category>
	</div>
</template>

<script>
import Category from './components/Category.vue'

export default {
	name: 'App',
	components: {Category},
	data() {
		return {
			foods: ['food1', 'food2', 'food3'],
			games: ['game1','game2','game3'],
			films: ['film1','film2','film3'],
		};
	}
}
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	h4{
		text-align: center;
	}
</style>
