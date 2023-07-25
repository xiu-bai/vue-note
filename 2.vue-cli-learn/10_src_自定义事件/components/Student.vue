<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>性别: {{ sex }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑xiubai事件</button>
    <button @click="death">销毁当前student组件的实例对象</button>
  </div>
</template>
 
<script>
export default {
  name: "Student",
  data() {
    return {
      name: '修白',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      this.$emit('xiubai', this.name)
      // this.$emit('demo');
      // this.$emit('click'); 如果在组件身上使用原生事件不加native修饰符则会让vue认为你这是自定义事件
    },
    unbind() {
      //解绑事件
      this.$off('xiubai'); //这种写法只能解绑一种自定义事件
      // this.$off('demo');
      //this.$off([ 'personalEvent', 'demo' ]);// 解绑多个事件，参数为包含多个事件名的数组
      // this.$off(); //比较暴力，有几个自定义事件就全给你解绑了
    },
    death() {
      this.$destroy(); //销毁了当前组件实例，销毁后所有该实例的自定义事件都不奏效了
    }
  }
}
</script>
<style scoped>
.student {
  background: rgb(96, 53, 255);
  padding: 5px;
  margin-bottom: 10px;
}
</style>