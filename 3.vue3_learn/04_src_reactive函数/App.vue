<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我叫{{ person.name }}, {{ person.age }}岁</h1>
  <h3>职位:{{ person.job.type }}</h3>
  <h3>薪水:{{ person.job.salary }}</h3>
  <h3>测试数据c:{{ person.job.a.b.c }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {

    let person = reactive({
      name: '修白',
      age: '18',
      job: {
        type: '前端',
        salary: 1800,
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    function changeInfo() {
      person.name = '修黑';
      person.age = 68;
      person.job.salary = 3000;
      person.job.type = '全栈';
      //测试reactive能否监测深层次变化
      person.job.a.b.c = '999';
      person.hobby[0] = '学习'
    }

    //返回一个对象
    return {
      person,
      changeInfo,
    }
  }
}
</script>