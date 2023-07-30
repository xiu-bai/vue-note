<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    getStudents(){
      axios.get('http://localhost:8080/api1/students')
      .then(res => console.log(res.data))
      .catch(e => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    },
    getCars(){
      axios.get('http://localhost:8080/api2/cars')
      .then(res => console.log(res.data))
      .catch(e => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    }

  },
  mounted() {
    
  },
}
</script>
<style>
</style>