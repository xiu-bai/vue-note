<!-- 加上setup允许在script中直接编写组合式api -->
<script setup>
// setup
// 1.执行时机,比beforeCreate还要早
// 2.setup函数中，获取不到this（this是undefined）
// 3.数据和函数，需要在setup最后return，才能给模版使用
const message = 'this is message'
const logMessage = () => {
    console.log(message)
}
</script>

<template>
    <div>
        {{ message }}
    </div>
    <button @click="logMessage">ann ==</button>
</template>

<style scoped></style>
