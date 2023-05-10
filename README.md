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

## 一.Vue基础

#### 1.Vue简介

##### 1.1 Vue是什么？

一套用于构建用户界面的**渐进式**javaScript框架

[^渐进式]: Vue可以自底向上逐层的应用。简单应用：只需一个轻量小巧的核心库。复杂应用：可以引入各式各样的Vue插件库

##### 1.2 谁开发的？

尤雨溪。2013:seed-Vue0.6。2014:Vue0.8。 2015.10.27:Vue1.0.0。2016.10.1:Vue2.0.0。2020.09.18:Vue3.0.0。

##### 1.3 Vue优点

- 采用**组件化**模式，提高代码复用率、让代码更好维护。
- **声明式**编码，让编码人员无需直接操作DOM，提高开发效率。
- 使用**虚拟DOM**+优秀的**Diff算法**，尽可能复用DOM节点。

##### 1.4 学习Vue之前需要掌握的JavaScript基础知识？

1.ES6语法规范，2.ES6模块化，3.原型、原型链，4.数组常用方法，5.axios，6.promise，等...

[Vue官网](https://cn.vuejs.org/)

#### 2.初始Vue

- 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
- el容器里面的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
- el容器里的代码被称为【Vue模板】；
- Vue实例和容器是一一对应的；
- 真实开发中只有一个Vue实例，并且回配合着组件一起使用；
-  {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到Data中的所有属性；
- 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新；

#### 3.模板语法

1. 插值语法：
   - 功能：用于解析标签体内容。
   - 写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
2. 指令语法：
   - 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件...）。
   - 举例：v-bind:href="xxx" 或 简写为 :href="xxx", xxx同样要写js表达式，且可以直接读取到data中的所有属性。
   - 备注：Vue中有很多的指令，且形式都是：v-???,此处拿v-bind举例。

#### 4.数据绑定

​	vue中有2种数据绑定的方式：

1. 单项绑定(v-bind)：数据只能从打他流向页面。
2. 双相绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
   - 双相绑定一半都应用在表单类元素上（如：input、select等）
   - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

#### 4.1 el与data的2种写法

1. el有2种写法
   - new Vue时候配置el属性。
   - 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
2. data有2种写法
   - 对象式
   - 函数式
     - 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
3. 一个重要的原则：
   - 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

#### 5.理解MVVM模型

1. M：模型(Model)：对应data中的数据
2. V：视图(View)：模板
3. VM：视图模型(ViewModel)：Vue实例对象

[![p9NFPyR.jpg](README.assets/p9NFPyR.jpg)](https://imgse.com/i/p9NFPyR)

观察发现：

1. data中所有的属性，最后都出现在vm身上。
2. vm身上所有的属性 及Vue原型上所有的属性，在Vue模板中都可以直接使用。

#### 5.1 数据代理

1. 回顾Object.defineProperty方法

```js
let number = 18;
let person = {
    name: '修白',
    sex:'男'
}
Object.defineProperty(person,'age',{
    // value:18,
    // enumerable:true,//控制属性是否可以枚举，默认值是false
    // writable:true,//控制属性是否可以被修改，默认值是false
    // configurable:true,//控制属性是否可以被删除，默认值是false

    // 当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get() {
        return number
    },
    // 当有人修改person的age属性时，set函数(setter)就会被调用，且收到修改的具体值
    set(value) {
        console.log('有人修改了age属性,且值是',value);
        number = value;
    }
})
// 不可以枚举，不参加遍历
console.log(person);
```

2. 数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```
//例：
let obj = {x:100}
let obj2 = {y:200}
Object.defineProperty(obj2,'x',{
    get(){
    	return obj.x
    },
    set(value){
    	obj.x=value
    }
})
console.log(obj2);
```

3. Vue中的数据代理

[![p9UNcY8.md.png](README.assets/p9UNcY8.md.png)](https://imgse.com/i/p9UNcY8)

- Vue中的数据代理：通过vm对象来代理data对象中的属性的操作（读/写）
- Vue中数据代理的好处：更加方便的操作data中的数据
- 基本原理：
  - 通过Object.defineProperty()把data对象中所有属性添加到vm上。
  - 为每一个添加到vm上的属性，都指定一个getter/setter。
  - 在getter/setter内部去操作（读/写）data中对应的属性。

#### 6.事件处理

##### 1.事件的基本使用

1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2. 事件的回调需要配置在**methods**对象中，最终会在vm上；
3. methods中配置的函数，不要用箭头函数！否则this就不是vm了；
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
5. @click=“demo” 和 @clik=“demo($event)” 效果一致，但后者可以传参数；

##### 2.Vue中的事件修饰符

1. **prevent**： 阻止默认事件（常用）；
2. **stop**：阻止事件冒泡（常用）；
3. **once**：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；
5. self：只有event.target是当前操作的元素时才触发事件；
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

##### 3.键盘事件

