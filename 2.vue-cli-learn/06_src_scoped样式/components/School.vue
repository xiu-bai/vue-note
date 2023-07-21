<template>
  <div class="demo">
    <h2 class="title">学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>
 
<script>
export default {
  name: "School",
  data() {
    return {
      name: '北京admin',
      address: '北京大学'
    }
  },
}
</script>
<style scoped>
.demo{
  background: rgb(114, 104, 255);
}
</style>