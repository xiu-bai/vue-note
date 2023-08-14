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

        //情况一: 监视ref所定义的一个响应式数据
        /*  watch(sum, (newValue, oldValue) => {
             //这里我并不需要this，所以箭头函数，普通函数也没问题
             console.log(`sum的值发生变化了：newValue:${newValue}, oldValue:${oldValue}`);
         }, {
             //监视的配置
             immediate: true //一上来就更新
         }); */

        //情况二:监视ref所定义的多个响应式数据
        /* watch([sum, msg], (newValue, oldValue) => {
            console.log(`sum或msg的值发生变化了`, newValue, oldValue);
        }, {
            immediate: true //一上来就更新
        }); */

        /**
         * 情况三:监视reactive所定义的一个响应式数据
         * 注意:1.此处无法获取正确的oldValue
         *      2.强制开启了深度监视
         */
        /* watch(person, (newValue, oldValue) => {
            console.log('person变化了');
            console.log(newValue, oldValue);
        }, {
            deep: false //此处的deep配置是无效的
        }) */

        //情况四：监视reactive所定义的响应式中的某一个属性
        /* watch(() => person.age, (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue);
        }) */

        //情况五:监视reactive所定义的响应式中的某些属性:并不只是一个
        /* watch([() => person.age, () => person.name], (newValue, oldValue) => {
          //此时newValue和oldValue都是数组
          console.log('person的age或name发生改变了',newValue, oldValue);
        }); */

        //特殊情况
        /* watch(() => person.job, (newValue, oldValue) => {
            //这里依然无法拿到正确的oldValue，因为依然监视的是对象
            console.log('person变化了', newValue, oldValue);
        }, {
            //这里必须要加deep:true注意
            deep: true //此处因为监视的是reactive所定义的响应式对象的某个属性(这个属性的值它依然是一个对象)，所以deep配置有效
        }) */

        //返回一个对象
        return {
            sum,
            msg,
            person
        }
    }
}
</script>