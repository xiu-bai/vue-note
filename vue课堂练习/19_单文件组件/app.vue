<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>
 
<script>
import School from './school';
import Student from "./student";

export default {
    name: "App",
    //汇总所有的组件
    components: {
        Student,
        School
    }
}
</script>