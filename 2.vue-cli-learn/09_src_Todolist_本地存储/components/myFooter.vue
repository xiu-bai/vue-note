<template>
  <!--隐式类型转换-->
  <div class="todo-footer" v-show="total">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ['todos','checkAllTodo',"clearAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
      // return this.todos.reduce((todoTotal, todo) => {
      //   //隐士类型转换
      //   return todoTotal + todo.done;
      // }, 0);
      // return this.todos.filter(todo => todo.done).length;
    },
    isAll() {
      return this.total === this.doneTotal && this.total > 0
    },
    isAll:{
      get(){
        return this.total === this.doneTotal && this.total > 0
      },
      set(value){
        this.checkAllTodo(value);
      }
    }
  },
  methods: {
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll(){
      this.clearAllTodo();
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>