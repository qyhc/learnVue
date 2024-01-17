<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 将category组件中的数据games传给使用该插槽的使用者App，在app中可以直接使用games（被atguigu对象封装起来了） -->
            <slot :games="games">我是默认值，当使用者没有传递具体结构时，我会出现1</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
	data() {
		return {
			games: ['game1','game2','game3'],
		};
	}

}
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

	img{
		width: 100%;
	}

	video{
		width: 100%;
	}
</style>
