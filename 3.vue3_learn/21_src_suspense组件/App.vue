<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child";//静态引入
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(() => import('./components/Child'))//动态引入

export default {
  name: 'App',
  components: { Child },
  setup() {

  }
}
</script>

<style>
.app {
  background: grey;
  padding: 10px;
}
</style>