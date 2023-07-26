<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <myHeader @addTodo="addTodo"/>
        <myList :todos="todos"/>
        <myFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

import myHeader from "@/components/myHeader";
import myList from "@/components/myList";
import myFooter from "@/components/myFooter";
export default {
  name: "App",
  components: {
    myHeader,
    myList,
    myFooter
  },
  data() {
    return {
      // todos:[
      //   // {id:'001',title:'抽烟',done:true},
      //   // {id:'002',title:'喝酒',done:false},
      //   // {id:'003',title:'打牌',done:true},
      // ]
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // 勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done;
        }
      })
    },
    // 删除一个todo
    deleteTodo(_,id){
      this.todos = this.todos.filter(todo=> todo.id !== id)
    },
    // 全选or取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done)
    },
    // 清除所有已经完成所有的todo
    clearAllTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    },
  },
  watch:{
    todos:{
      deep:true,//深度监视当我监视数组中的对象的某个属性的变化它也会产生反应
      handler(value){
        //本地存储存的是key和value都是字符串
        //数据存放在本地存储中
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)

    this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off(['checkTodo'])

    pubsub.unsubscribe(this.pubId)
  },
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