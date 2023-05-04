# 前端笔记
B站尚硅谷张天禹前端Vue2.0-Vue3.0学习笔记

## 学习顺序

```
1.vue基础
2.vue-cli
3.vue-router
4.vuex
5.element-ui
6.vue3
```

## Vue简介

#### 1.Vue是什么？

一套用于构建用户界面的**渐进式**javaScript框架

[^渐进式]: Vue可以自底向上逐层的应用。简单应用：只需一个轻量小巧的核心库。复杂应用：可以引入各式各样的Vue插件库

#### 2.谁开发的？

尤雨溪。2013:seed-Vue0.6。2014:Vue0.8。 2015.10.27:Vue1.0.0。2016.10.1:Vue2.0.0。2020.09.18:Vue3.0.0。

#### 3.Vue优点

​	1.采用**组件化**模式，提高代码复用率、让代码更好维护。

​	2.**声明式**编码，让编码人员无需直接操作DOM，提高开发效率。

​	3.使用**虚拟DOM**+优秀的**Diff算法**，尽可能复用DOM节点。

#### 4.学习Vue之前需要掌握的JavaScript基础知识？

​	1.ES6语法规范，2.ES6模块化，3.原型、原型链，4.数组常用方法，5.axios，6.promise，等...

[Vue官网](https://cn.vuejs.org/)



## 一.Vue基础

#### 1.初始Vue

- 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
- el容器里面的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
- el容器里的代码被称为【Vue模板】；
- Vue实例和容器是一一对应的；
- 真实开发中只有一个Vue实例，并且回配合着组件一起使用；
-  {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到Data中的所有属性；
- 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新；

#### 2.模板语法

1. 插值语法：
   - 功能：用于解析标签体内容。
   - 写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
2. 指令语法：
   - 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件...）。
   - 举例：v-bind:href="xxx" 或 简写为 :href="xxx", xxx同样要写js表达式，且可以直接读取到data中的所有属性。
   - 备注：Vue中有很多的指令，且形式都是：v-???,此处拿v-bind举例。

#### 3.数据绑定

​	vue中有2种数据绑定的方式：

	1. 单项绑定(v-bind)：数据只能从打他流向页面。
 	2. 双相绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
     - 双相绑定一半都应用在表单类元素上（如：input、select等）
     - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

#### 4.el与data的两种写法

