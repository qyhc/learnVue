<template>
	<div class="container">

		<Category title="游戏">
			<!-- 如果要使用这种方法的话模板template是必要的 -->
			<template slot-scope="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{ g }}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="atguigu">
				<ol>
					<li style="color:red" v-for="(g,index) in atguigu.games" :key="index">{{ g }}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="atguigu">
				<h4 v-for="(g,index) in atguigu.games" :key="index">{{ g }}</h4>
			</template>
		</Category>

		<!-- <Category title="游戏">
				<h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
		</Category> -->

	</div>
</template>

<script>
import Category from './components/Category.vue'

export default {
	name: 'App',
	components: {Category}
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
