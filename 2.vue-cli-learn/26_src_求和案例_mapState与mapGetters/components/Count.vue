<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h3>放大十倍后为:{{ bigSum }}</h3>
        <h3>我在{{ school }}学习{{ subject }}</h3>
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
import { mapState, mapGetters } from 'vuex';
export default {
    //计数组件
    name: "Count",
    data() {
        return {
            n: 1,// 代表用户在select框开始的时候选择的数字
        }
    },
    computed: {
        /*sum() {
            return this.$store.state.sum;
        },
        school() {
            return this.$store.state.school;
        },
        subject() {
            return this.$store.state.subject;
        },*/

        //借助mapState从state中生成计算属性,对象写法
        // ...mapState({sum: 'sum',school: 'school',subject: 'subject'}),

        //借助mapState从state中生成计算属性,数组写法(即代表了生成的计算属性名为sum，同时也代表了从state找到sum)
        ...mapState(['sum', 'school', 'subject']),

        // bigSum() {
        //     return this.$store.getters.bigSum;
        // }
        //借助mapGetters从getters中生成计算属性,对象写法
        // ...mapGetters({ bigSum: 'bigSum' }),
        //借助mapGetters从getters中生成计算属性,数组写法
        ...mapGetters(['bigSum']),

    },
    methods: {
        increment() {
            this.$store.commit('JIA', this.n)
        },
        decrement() {
            this.$store.commit('JIAN', this.n)
        },
        incrementOdd() {
            // if(this.$store.state.sum % 2){
            this.$store.dispatch('jiaOdd', this.n)
            // }
        },
        incrementWait() {
            // setTimeout(() => {
            this.$store.dispatch('jianWait', this.n)
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