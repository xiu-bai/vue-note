<template>
  <div class="demo">
    <h2>姓名:{{ name }}</h2>
    <h2 class="fontSize">性别: {{ sex }}</h2>
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
}
</script>
<style scoped lang="less">
.demo{
  background: orange;
  .fontSize{
    font-size: 50px;
  }
}
</style>