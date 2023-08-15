<template>
  <button @click="isShowDemo=!isShowDemo">显示隐藏</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import { ref } from 'vue'
import Demo from './compontent/Demo'
export default{
  name:'App',
  components:{Demo},
  setup() {
    let isShowDemo = ref(true);
    return{isShowDemo}
  }
}
</script>