<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>
 
<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: '北京',
      address: '北京大学'
    }
  },
  methods: {
    demo(msgName,data){
      console.log('有人发布了hellow消息，hellow回调执行了',msgName,data)
    }
  },
  mounted(){
    // this.$bus.$on('hellow',data=>{
    //   console.log('school组件',data);
    // });
    //订阅消息
    // this.pid = pubsub.subscribe('hellow',(msgName,data)=>{
    //   //注意这里写剪头函数this才不会丢
    //   console.log('有人发布了hellow消息，hellow回调执行了',msgName,data)
    // })
    // 或
    this.pid = pubsub.subscribe('hellow',this.demo)
  },
  beforeDestroy() {
    //   this.$bus.$off('hellow')//销毁解绑
    pubsub.unsubscribe(this.pid)//取消订阅
  },
}
</script>
<style scoped>
   /*scoped代表局部的*/
  .school{
    background: rgb(135, 235, 157);
    padding:5px
  }
</style>