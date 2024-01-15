<script setup>
import { useCountStore } from '@/store/counter'
const counterStore = useCountStore()
</script>

<template>
  <div>
    我是Son2.vue - {{ counterStore.count }}
    <button @click="counterStore.subCount">-</button>
  </div>
</template>

<style scoped>

</style>
