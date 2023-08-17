<template>
  <div class="app">
    <h2>我是App组件</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
  name: 'App',
  setup() {
    let car = reactive({ name: '奔驰', price: '40' })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log('sum,ref,isRef---' + isRef(sum));
    console.log('car,reactive,reactive---' + isReactive(car));
    console.log('car2,readonly,isReadonly---' + isReadonly(car2));
    console.log('car,reactive,isProxy---' + isProxy(car));
    console.log('car2,readonly,isProxy---' + isProxy(car2));

    return {
      ...toRefs(car),
      sum,
      car2

    }
  }
}
</script>