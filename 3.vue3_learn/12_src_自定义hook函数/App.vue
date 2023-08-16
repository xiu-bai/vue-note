<template>
  <button @click="isShowDemo=!isShowDemo">显示隐藏</button>
  <Demo v-if="isShowDemo"/>
  <Text/>
</template>

<script>
import { ref } from 'vue'
import Demo from './compontent/Demo'
import Text from './compontent/Text'
export default{
  name:'App',
  components:{Demo,Text},
  setup() {
    let isShowDemo = ref(true);
    return{isShowDemo}
  }
}
</script>