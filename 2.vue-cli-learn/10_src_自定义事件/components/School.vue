<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>
 
<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      name: '北京大学',
      address: '北京'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name,666,777,888);
    }
  }
}
</script>
<style scoped>
   /*scoped代表局部的*/
  .school{
    background: rgb(135, 235, 157);
    padding:5px
  }
</style>