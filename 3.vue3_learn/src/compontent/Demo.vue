<template>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ salary }}块</h2>
    <button @click="name = name + '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue';
export default {
    name: 'App',
    setup() {
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 1800
                }
            }
        })

        const name1 = person.name //注意输出字符串，并不是响应式的数据
        console.log('@@@@@', name1);
        const name2 = toRef(person, 'name');
        //RefImpl 这里的name2与person.name是完全一模一样的(你改这里的name2与你改person.name是一码事),且数据还是响应式的
        console.log('####', name2);

        //返回一个对象
        return {
            name: toRef(person, 'name'),
            age: toRef(person, 'age'),
            salary: toRef(person.job.j1, 'salary'),
        }
    }
}
</script>