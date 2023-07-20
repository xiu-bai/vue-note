<template>
    <div class="demo">
        <h1>学校名称:{{ name }}</h1>
        <h1>学校地址: {{ address }}</h1>
    </div>
</template>

<script>
export default {
    name: "School",
    components: {

    },
    data() {
        return {
            address: '北京',
            name: '北京大学'
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped>
.demo {
    background: aqua;
}
</style>