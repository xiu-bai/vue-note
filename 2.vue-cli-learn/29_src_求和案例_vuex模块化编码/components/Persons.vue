<template>
    <div>
      <h2>人员列表</h2>
      <h3 style="color:red;">Count组件求和为:{{ sum }}</h3>
      <h3>列表中第一个人的名字：{{ firstPersonName }}</h3>
      <input type="text" placeholder="请输入名字" v-model="name" />
      <button @click="add">添加</button>
      <button @click="addBai">添加一个姓白的人</button>
      <button @click="addPersonServer">添加一个随机人</button>
      <ul>
        <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
      </ul>
    </div>
 </template>
 
 <script>
//  import { mapState } from 'vuex';
 import {nanoid} from "nanoid";
 export default {
   name: "Person",
   data(){
     return {
       name: '',
     }
   },
   computed:{
    //  ...mapState(['personList']),
     personList(){
       return this.$store.state.personAbout.personList;
     },
     sum(){
       return this.$store.state.personAbout.sum;
     },
     firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName'];
     }
   },
   methods:{
      add(){
        const personObj = {id: nanoid(),name: this.name};
        this.$store.commit('personAbout/ADD_PERSON', personObj);
        this.name = '';
      },
      addBai(){
        const personObj = {id: nanoid(),name: this.name};
        this.$store.dispatch('personAbout/addPersonBai',personObj);
        this.name = '';
      },
      addPersonServer(){
        this.$store.dispatch('personAbout/addPersonServer');
      }
   },
 }
 </script>
 
 <style scoped>
    button{
      margin-left: 5px;
    }
    ul{
      margin-top: 5px;
    }
 </style>