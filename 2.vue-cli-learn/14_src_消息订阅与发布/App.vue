<template>
  <div class="app">
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
}
</script>
<style>
.app {
  background: gray;
  padding: 5px;
}
</style>