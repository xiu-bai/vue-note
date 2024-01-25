<script setup>
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<template>
  <div>
    <!-- 国际化处理 -->
    <el-config-provider :locale="zh">
      <!-- App.vue只需要留一个路由出口 router-view即可 -->
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
