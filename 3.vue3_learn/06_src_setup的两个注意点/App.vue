<template>
  <Demo @hello="showHelloMsg" msg="你好" school="北京">
    <template v-slot:name>
      <span>123</span>
    </template>
    <template v-slot:asd>
      <span>567</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './compontent/Demo'
export default{
  name:'App',
  components:{Demo},
  setup(){
    function showHelloMsg(value){
      alert(`你好，${value}`)
    }

    return{
      showHelloMsg
    }
  }
}
</script>