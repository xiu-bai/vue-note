<template>
  <div>
    <Count />
    <hr/>
    <Persons/>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Persons from "@/components/Persons";
export default {
  name: "App",
  components: {
    Count,
    Persons
  },
}
</script>
<style lang="css" scoped></style>