<template>
    <div >
      <h2 @click="showName">学校名称:{{  name }}</h2>
      <h2>学校地址: {{ address }}</h2>
    </div>
 </template>
 
 <script>
 //引入混合
 import {  hunhe, hunhe2 } from "@/mixin";
 export default {
   name: "School",
   data(){
     console.log(this);
     return {
        name: '北京',
        address: '北京大学'
     }
   },
   mixins:[ hunhe, hunhe2 ]
 }
 </script>