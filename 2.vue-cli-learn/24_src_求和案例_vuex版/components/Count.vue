<template>
    <div>
        <h1>当前求和为:{{ $store.state.sum }}</h1>
        <!--让其收集到的数据全是number类型的 number修饰符-->
        <select v-model.number="n">
            <!--让所有的value全部绑定为数字-->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
  
<script>
export default {
    //计数组件
    name: "Count",
    data() {
        return {
            n: 1,// 代表用户在select框开始的时候选择的数字
        }
    },
    methods: {
        increment() {
            this.$store.commit('JIA',this.n)
        },
        decrement() {
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd() {
            // if(this.$store.state.sum % 2){
                this.$store.dispatch('jiaOdd',this.n)
            // }
        },
        incrementWait() {
            // setTimeout(() => {
                this.$store.dispatch('jianWait',this.n)
            // }, 500);
        }
    },
    mounted() {
        
    },
}
</script>
  
<style scoped>
button {
    margin-left: 5px;
}
</style>