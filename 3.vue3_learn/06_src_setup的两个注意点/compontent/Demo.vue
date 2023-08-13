<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <slot name="name"></slot>
    <button @click="text">测试Demo组件的hello事件</button>
    <slot name="asd"></slot>
</template>
  
<script>
import { reactive } from 'vue';
export default {
    name: 'App',
    props:['msg','school'],
    emits:['hello'],
    setup(props,context) {
        // console.log(this); ///undefined
        // console.log(props); //props: 外部给组件丢的参数 => 响应式(Proxy实例)
        // console.log(context.attrs);// 相当于vue2中的$attrs
        // console.log(context.emit);// 触发自定义事件
        console.log(context.slots);//插槽
        console.log(context);
        let person = reactive({
            name: '修白',
            age: '18',
        })

        // 方法
        function text(){
            context.emit('hello',666)
        }

        //返回一个对象
        return {
            person,
            text
        }
    }
}
</script>