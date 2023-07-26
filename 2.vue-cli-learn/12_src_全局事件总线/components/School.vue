<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>
 
<script>
export default {
  name: "School",
  data() {
    return {
      name: '北京大学',
      address: '北京'
    }
  },
  mounted(){
    this.$bus.$on('hellow',data=>{
      console.log('school组件',data);
    });
  },
  methods:{
  },
  beforeDestroy() {
    this.$bus.$off('hellow')//销毁解绑
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