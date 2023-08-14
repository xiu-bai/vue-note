<template>
    <h1>当前求和为:{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <hr />
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
    <hr />
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪资:{{ person.job.j1.salary }}块</h2>
    <button @click="person.name = person.name + '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长薪资</button>
</template>
  
<script>
import { ref, reactive, watch } from 'vue';
export default {
    name: 'App',
    //vue2中的watch写法
    /* watch: {
        //简单写法
        sum(newValue,oldValue){
          console.log('sum的值发生变化了');
          console.log(`newValue:${newValue}, oldValue:${oldValue}`);
        },

        //完整写法
        sum: {
            deep: true, //深度监视
            immediate: true, //一开始就监视一下
            handler(newValue, oldValue) {
                console.log('sum的值发生变化了');
                console.log(`newValue:${newValue}, oldValue:${oldValue}`);
            }
        }
    }, */
    setup() {
        let sum = ref(0);
        let msg = ref('你好');
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 1800
                }
            }
        })

        //监测的不是一个值，而是一个保存值的结构(不能写成sum.value) 不能监视一个具体的值注意
        watch(sum, (newValue, oldValue) => {
            console.log(newValue, oldValue);
        });


        //person是RefImpl
        //开启深度监视不会存在问题
        /* watch(person, (newValue, oldValue) => {
          console.log(newValue, oldValue);
        },{
          deep: true
        }); */

        //这里如果不是person.value则会出现问题 因为person是一个RefImpl(默认没开启深度监视)
        //但是person.value是一个借助了proxy生成的reactive响应式对象 所以这里可以解决问题
        /* watch(person.value, (newValue, oldValue) => {
          console.log(newValue, oldValue);
        }); */

        //返回一个对象
        return {
            sum,
            msg,
            person
        }
    }
}
</script>