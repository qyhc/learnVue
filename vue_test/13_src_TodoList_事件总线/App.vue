<template>
    <div id = "root">
        <div class="todo-container">
            <div class="todo-warp">
                <!-- 将App中data的receive方法通过receive参数传给MyHeader儿子组件 -->
                <MyHeader @addTodo="addTodo"></MyHeader>
                <!-- 将App中data的todos数据通过todos参数传给MyList儿子组件 -->
                <MyList :todos="todos"></MyList>
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'

export default {
    name: 'App',
    data() {
        return {
            // todos: [
            //     { id: '001', title: '抽烟', done: true },
            //     { id: '002', title: '喝酒', done: false },
            //     { id: '003', title: '开车', done: true },
			// ]
			// 第一次使用没有数据，JSON.parse返回的是null，而上面用了todos的length属性将会报错
			// 所以需要给个空数组
			todos:JSON.parse(localStorage.getItem('todos')) ||[]
        }
	},
	mounted() {
		this.$bus.$on('checkTodo',this.checkTodo)
		this.$bus.$on('deleteTodo',this.deleteTodo)
	},
	beforeDestroy() {
		this.$bus.$off('checkTodo')
		this.$bus.$off('deleteTodo')

	},
    methods: {
        addTodo(todoObj) {
            // console.log('我是App组件，我收到了数据：', x);
            // console.log('this is : ',this);
            this.todos.unshift(todoObj)
        },
        // 勾选or取消勾选一个todo
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if(todo.id == id) todo.done = !todo.done
            })
		},
		deleteTodo(id) {
			this.todos = this.todos.filter((todo) => {
				return todo.id !==id
			})
		},
		// 全选or取消全选
		checkAllTodo(done) {
			this.todos.forEach((todo) => {
				todo.done = done
			})
		},
		// 清楚所有已经完成的todo
		clearAllTodo() {
			this.todos = this.todos.filter((todo) => {
				return !todo.done
			})
		}
	},
	watch: {
		// 开启深度监视todos的结构变化，如不开启则用户在修改done时vue将监测不到
		// 也就无法写入数据到本地
		todos: {
			deep: true,
			handler(value) {
				localStorage.setItem('todos',JSON.stringify(value))
			}
		}
	},
    components: { MyList ,MyFooter,MyHeader}
}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
