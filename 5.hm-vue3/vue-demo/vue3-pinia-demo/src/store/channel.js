import { defineStore } from "pinia";
import axios from 'axios'
import { ref } from 'vue'

export const useChannelStore = defineStore('channel', () => {
    // 声明数据 state
    const channelList = ref([])
    // 声明操作数据的方法, action (普通函数)
    const getList = async () => {
        // 异步
        const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
        channelList.value = data.channels
    }
    // 声明基于数据派生的计算属性 getters (computed)

    return {
        channelList,
        getList
    }
})