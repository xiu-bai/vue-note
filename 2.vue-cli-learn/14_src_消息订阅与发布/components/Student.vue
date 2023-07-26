<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>性别: {{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>
 
<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: '修白',
      sex: '男',
    }
  },
  mounted() {
    // console.log(this.x); 
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hellow',666)
      //发布订阅
      pubsub.publish('hellow', 666)
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