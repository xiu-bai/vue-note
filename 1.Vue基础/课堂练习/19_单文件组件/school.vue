<template>
    <!--  组件的交互-->
    <div class="demo">
        <h2>学校名称:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    name: 'school', //开发者工具最终呈现的名字为School
    data() {
        return {
            name: '北京大学',
            address: '北京'
        }
    },
    methods: {
        showName() {
            alert(this.name);
        }
    }
};

//统一暴露
// export { school };
// export default school //默认暴露
</script>

<style>
/*css样式*/
.demo {
    background: skyblue;
}
</style>