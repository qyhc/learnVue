<template>
	<transition name="todo" :appear="true">
		<li>
			<label>
				<!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
				<!-- 勾选->取消勾选 或者相反 都是一种改变状态的行为 会触发handleCheck方法 -->
				<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
				<span v-show="!todo.isEdit">{{ todo.title }}</span>
				<input
				type="text"
				v-show="todo.isEdit"
				:value="todo.title"
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
				>
			</label>
			<button class="btn btn-danger" @click="handelDelete(todo.id)">删除</button>
			<button v-show="!todo.isEdit" class="btn btn-edit" @click="handelEdit(todo)">编辑</button>
    	</li>
	</transition>

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
		},
		// 编辑
		handelEdit(todo) {
			// 判断todo身上是否拥有isEdit属性
			// 如果有则无需重新set放一次
			if (todo.hasOwnProperty('isEdit')) {
				console.log('todo身上有isEdit');
				todo.isEdit = true
			}
			else {
				console.log('todo身上没有isEdit');
				this.$set(todo, 'isEdit', true)
			}
			// 作用相当于定时器，但是对于定时器你无法明确知道需要多少时间回调函数handelEdit才执行完
			this.$nextTick(function (params) {
				// 如果不用nextTick，当执行完上面的if - else语句之后输入框还没有渲染到DOM页面中
				// 因此聚焦方法focus无法起作用
				this.$refs.inputTitle.focus()
			})
			// 注意：这回调函数会一口气全执行完才会见DOM渲染到页面上，如果focus的时机不对（输入框没有渲染到页面上时）
			// 就无法聚焦
		},
		// 失去焦点时回调（真正执行修改逻辑）
		handleBlur(todo,e) {
			todo.isEdit = false
			if(!e.target.value.trim()) return alert('输入不能为空')
			// e.target.value 是为了获取输入框中新的修改值
			this.$bus.$emit('updateTodo',todo.id,e.target.value)
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

    .todo-enter-active{
        animation: atguigu 1s;
    }
    .todo-leave-active{
        animation: atguigu 1s reverse;
    }
    @keyframes atguigu {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
