<template>
    <h1>当前求和为:{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
import {
    ref
} from 'vue';
import usePoint from '../hooks/usePoint'
export default {
    name: 'App',
    setup() {
        let sum = ref(0);
        
        let point = usePoint()
        
        // 返回一个对象
        return {
            sum,
            point
        }
    },
}
</script>