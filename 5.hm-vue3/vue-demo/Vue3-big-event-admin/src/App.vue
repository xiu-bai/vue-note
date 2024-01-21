<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores'

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

const userStore = useUserStore()
const countStore = useCountStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    <hr />
    <textDemo />
    我是app
    <button @click="$router.push('./home')">aaaa</button>
    <button @click="goList">bbbb</button>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('00000000000000000')" type="primary"
      >登录</el-button
    >
    <el-button @click="userStore.removeToken()" type="success">退出</el-button>
    <hr />
    {{ countStore.count }}
    <el-button @click="countStore.add(2)">加法2</el-button>
  </div>
</template>

<style scoped></style>
@/stores/modules/user
