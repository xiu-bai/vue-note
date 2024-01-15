<script setup>
import { useCountStore } from '@/store/counter'
const counterStore = useCountStore()
</script>

<template>
    <div>
        我是Son1.vue - {{ counterStore.count }} {{ counterStore.double }}
        <button @click="counterStore.addCount">+</button>
    </div>
</template>

<style scoped></style>
