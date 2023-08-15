<template>
    <h1>当前求和为:{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
</template>

<script>
import {
    ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
} from 'vue';
export default {
    name: 'App',
    setup() {
        let sum = ref(0);

        //通过组合式api的形式去使用生命周期钩子
        ///setup()相当于beforeCreate()和created()
        onBeforeMount(() => { console.log('--onBeforeMount--挂载之前'); })
        onMounted(() => { console.log('--onMounted--挂在完毕'); })
        onBeforeUpdate(() => { console.log('--onBeforeUpdate--更新之前'); })
        onUpdated(() => { console.log('--onUpdated--更新完成'); })
        onBeforeUnmount(() => { console.log('--onBeforeUnmount--卸载之前'); })
        onUnmounted(() => { console.log('--onUnmounted--卸载完毕'); })

        console.log('-----setup----')

        return {
            sum
        }
    },
    // 通过配置项的形式使用生命周期钩子
    //#region
    /* beforeCreate(){
        console.log('--beforeCreate--实例初始化之后');
    },
    created(){
        console.log('--created--实例创建完成之后');
    },
    beforeMount(){
        console.log('--beforeMount--挂载之前');
    },
    mounted(){
        console.log('--mounted--挂在完毕');
    },
    beforeUpdate(){
        console.log('--beforeUpdate--更新之前');
    },
    updated() {
        console.log('--updated--更新完成');
    },
    beforeUnmount() {
        console.log('--beforeUnmount--卸载之前');
    },
    unmounted(){
        console.log('--unmounted--卸载完毕');
    } */
    //#endregion
}
</script>