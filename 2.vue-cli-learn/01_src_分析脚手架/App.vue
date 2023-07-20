<template>
  <div>
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
import School from './compontents/school';
import Student from "./compontents/student";

export default {
  name: "App",
  //汇总所有的组件
  components: {
      Student,
      School
  }
}
</script>