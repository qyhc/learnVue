<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
            <!-- 勾选->取消勾选 或者相反 都是一种改变状态的行为 会触发handleCheck方法 -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handelDelete(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo'],
    mounted() {
        console.log(this.todo);
    },
	methods: {
		// 勾选or取消勾选
        handleCheck(id) {
            // console.log(id);
            // 通知App组件将对应的todo对象的done值取反
			// this.checkTodo(id)
			this.$bus.$emit('checkTodo',id)
		},
		// 删除
		handelDelete(id) {
			if (confirm('确定删除吗？')) {
				// console.log(id);
				// 通知App组件将对应的todo对象删除
				// this.deleteTodo(id)

				// 借助全局事件总线
				// this.$bus.$emit('deleteTodo',id)

				pubsub.publish('deleteTodo',id)
			}
		}
    },
}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}

	li:hover button{
		display: block;
	}
</style>
