<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

// 组件对外暴露方法open，区分添加、编辑
const open = (row) => {
  dialogVisible.value = true
  console.log(row, '00000000')
}

// 向外暴露
defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
    <div>我是内容部分</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
