<template>
    <!--  组件的交互-->
    <div>
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生年龄:{{ age }}</h2>
        <button @click="showName">点我提示学生姓名</button>
    </div>
</template>

<script>
export default {
    name: 'student', //开发者工具最终呈现的名字为Student
    data() {
        return {
            name: '修白',
            age: 23
        }
    },
    methods: {
        showName() {
            alert(this.name);
        }
    }
};
</script>