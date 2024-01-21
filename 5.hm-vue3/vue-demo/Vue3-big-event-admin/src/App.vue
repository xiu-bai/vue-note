<script setup>
import { useRoute, useRouter } from 'vue-router'

// 在Vue3 CompositionAPI 中
// 1.获取路由对象 router useRouter
//   const router = useRouter()
// 2.获取路由参数route useRoute
//   const route = useRoute()

const router = useRouter()
const route = useRoute()

const goList = () => {
  router.push('/list')
  console.log(router, route)
}
</script>

<template>
  <div>
    我是app
    <button @click="$router.push('./home')">aaaa</button>
    <button @click="goList">bbbb</button>
  </div>
</template>

<style scoped></style>
