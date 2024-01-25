<script setup>
import { artGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'
/* defineProps({
  cid: {
    type: [Number, String]
  }
})

const emit = defineEmits(['update:cid']) */
defineProps({
  modelValue: {
    type: [Number, String]
  }
})

const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}
getChannelList()
</script>
<template>
  <!-- label 展示给用户看，value收集交给后台 -->
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    style="width: 240px"
  >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
    <el-option label="体育" value="体育"></el-option>
  </el-select>
</template>
