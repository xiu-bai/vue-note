<template>
    <h2>我是text组件</h2>
    <h2>当前点击时鼠标的坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
    setup() {
        
        let point = usePoint()

        // 返回一个对象
        return {
            point
        }
    },
}
</script>