<script setup>
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCountStore } from '@/store/counter'
const counterStore = useCountStore()

import { useChannelStore } from '@/store/channel'
const channelStore = useChannelStore()
</script>

<template>
  <div>
    <h3>
      app.vue组件
      - {{ counterStore.count }}
      - {{ counterStore.msg }}
    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="channelStore.getList">获取数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>