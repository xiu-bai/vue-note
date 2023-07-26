<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School/>
    <hr />
    <Student/>
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
  data() {
    return {
      msg: '你好',
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style>
.app {
  background: gray;
  padding: 5px;
}
</style>