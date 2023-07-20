<template>
  <div>
     <!---多个vc互不影响-->
     <!--v-bind的作用重要 获取后面表达式值的赋给props的属性-->
     <Student name="修白" sex="男" :age='23'/>
     <hr/>
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
 name: "App",
 components:{
   Student,
 },
}
</script>