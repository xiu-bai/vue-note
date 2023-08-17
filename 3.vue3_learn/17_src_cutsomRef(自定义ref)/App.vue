<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref,customRef } from 'vue'

export default {
  name: 'App',
  components: {

  },
  setup() {

    // 自定义一个ref -- 名为：myRef
    function myRef(value,delay) {
      let timer;
      return customRef((track,trigger)=>{
        return {
          get(){
            track(); //告诉Vue追踪alue值的变化（提前和get商量一下，让他认为这个value是有用的）
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue;
              trigger();//通知Vue去重新解析界面
            },delay)
          }
        }
      })
    }

    // let keyWord = ref('hello')//使用Vue提供的ref
    let keyWord = myRef('hello',1000); //使用自定义ref

    return {
      keyWord
    }
  }
}
</script>