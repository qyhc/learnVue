<template>
	<div class="container">
		<Category :listData="foods" title="美食">
			<img src="https://pbs.twimg.com/media/GD9z3BZa4AAouVi?format=jpg&name=large" alt="">
		</Category>

		<Category :listData="games" title="游戏">
			<ul>
				<li v-for="(g,index) in games" :key="index">{{ g }}</li>
			</ul>
		</Category>

		<Category :listData="films" title="电影">
			<!-- controls显示播放按钮 -->
			<video controls src="https://twitter.com/i/status/1747529187039035490"></video>
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
	.container{
		display: flex;
		justify-content: space-around;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
</style>
