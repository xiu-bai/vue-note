<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <Child/>
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  name: 'App',
  components: {Child},
  setup(){
    
  }
}
</script>

<style>
.app{
  background: grey;
  padding: 10px;
}
</style>