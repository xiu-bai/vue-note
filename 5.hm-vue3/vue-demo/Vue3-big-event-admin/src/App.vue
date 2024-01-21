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
    <textDemo />
    我是app
    <button @click="$router.push('./home')">aaaa</button>
    <button @click="goList">bbbb</button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<style scoped></style>
