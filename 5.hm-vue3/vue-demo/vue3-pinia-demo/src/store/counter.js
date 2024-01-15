import { defineStore } from "pinia";
import { ref, computed } from 'vue'

// 定义store
// defineStore（仓库的唯一标识，()=>{...}）
export const useCountStore = defineStore('counter', () => {
    // 声明数据 state
    const count = ref(100)
    // 声明操作数据的方法, action (普通函数)
    const addCount = () => count.value++
    const subCount = () => count.value--

    // 声明基于数据派生的计算属性 getters (computed)
    const double = computed(() => count.value * 2)

    // 声明数据 state - msg
    const msg = ref('hellow pinia')

    return {
        count,
        addCount,
        subCount,
        double,
        msg
    }
})