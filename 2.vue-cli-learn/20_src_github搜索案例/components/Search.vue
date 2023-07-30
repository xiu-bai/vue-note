<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">搜索Github用户</h3>
        <div>
            <input type="text" placeholder="输入您要搜索的名称" v-model="keyword" />&nbsp;
            <button @click="searchUsers">搜索</button>
        </div>
    </section>
</template>
  
<script>
import axios from "axios";
export default {
    name: "Search",
    data() {
        return {
            keyword: '',
        }
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('updateListData', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            })
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
                .then(res => {
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: '',
                        users: res.data.items
                    })
                })
                .catch(e => {
                    console.log(`请求失败:${e.message}`)
                    this.$bus.$emit("updateListData", {
                        isLoading: false,
                        errMsg: e.message,
                        users: []
                    });
                });
        },
    }
}
</script>
  
<style scoped></style>