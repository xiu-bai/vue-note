<template>
  <div class="demo">
    <!--注意props传递过来的值是不能改的(尽量避免去改，控制台会有警告)-->
    <h1>{{ msg }}</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>性别: {{ sex  }}</h2>
    <h2>年龄: {{ myAge + 1 }}</h2>
    <button @click="updateName">尝试修改年龄</button>
  </div>
</template>
 
<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
      //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
      msg: '我是一名普通人',
      myAge: this.age //把props传递过来的值当成vc的状态，这样改name是不会出问题的，因为你没有直接去修改props
    }
  },
  methods: {
    updateName() {
      this.myAge++;
    }
  },
  // props: ['name', 'sex', 'age'], //简单声明接收

  //接受的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // }

  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //类型
      required: true //必要的
    },
    age: {
      type: Number,
      default: 99 //默认值
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>