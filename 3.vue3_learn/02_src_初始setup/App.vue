<template>
  <h1>我是app组件</h1>
  <h3>我叫{{ name }}, {{ age }}岁</h3>

  
  <p>数据冲突该怎么办？{{ a }}</p>
  <button @click="sayHello">vue3配置的sayHello</button>
  <br />
  <button @click="sayWelcome">vue2配置的sayWelcome</button>
  <br />
  <button @click="test1">测试一下在vue2中去读取vue3的配置</button>
  <br>
  <button @click="test2">测试一下在vue3的setup中去读取vue2的配置</button>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'App',
  //测试使用vue2的内容
  data() {
    return {
      sex: '男',
      a: 1,

    }
  },
  //vue2配置方法的方式
  methods: {
    test1() {
      console.log(this.vue2);
      console.log(this.name);
      console.log(this.sayHello);
      this.sayHello();
    },
    sayWelcome() {
      alert('我是'+this.sex+'的')
    }

  },
  //此处只是测试setup，暂时先不考虑响应式的问题
  setup() {
    let name = '修白';
    let age = 18;
    let a = 123;

    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了`);
    }

    //在vue3的配置里去读取vue2的属性
    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.vue2);
      console.log(this.test1);
    }

    //返回一个对象
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    //返回一个渲染函数
    //这是直接将你在这里渲染的东西替换到template中
    // return()=>h('h1','xiubai')

  }
}
</script>

<style></style>
