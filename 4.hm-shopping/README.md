# hm-shopping

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
# vue2项目开发
## 1. 创建项目
1. 安装脚手架：`npm install -g vue-cli@版本号`
2. 创建项目：`vue create 项目名称`
3. 选择手动配置：`Manually select features`
   - Babel/Router/Vuex/CSS/Linter
   - Vue2.x
   - VueRouter: hash模式
   - css预处理: Less
   - ESlint： Standard & Lint on Save
     - ESlint witth error prevention only
       1. 只配置使用 ESLint 官网的推荐规则
       2. 这些规则在这里添加链接描述
     - ESlint+Airbnb config
       1. 使用 ESLint 官网推荐的规则 + Airbnb 第三方的配置
       2. Airbnb 的规则在这里添加链接描述
     - ESlint+Standard config
       1. 使用 ESLint 官网推荐的规则 + Standard 第三方的配置
       2. Standard 的规则在这里 添加链接描述
     - ESlint+Prettier
       1. 使用 ESLint 官网推荐的规则 + Prettier 第三方的配置
       2. Prettier 主要是做风格统一。代码格式化工具
   - 配置文件 dedicated config files
## 2. 调整初始化目录
```
├── src
│   ├── api: 接口
│   ├── assets: 存放静态资源
│   ├── component: 存放组件
│   ├── router: 路由
│   ├── utils: 常用工具函数
│   ├── App.vue: 汇总所有组件
│   ├── main.js: 入口文件
```
1. 删除 多余文件
2. 修改 路由配置和APP.vue
3. 新增 两个文件api/utils
   - api接口模块：发送ajax请求的接口模块
   - utils工具模块：自己封装的一些工具方法模块

## 3.安装[Vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/)组件库

1. 安装： `npm i vant@latest-v2 -S`

2. 引入组件：

   2.1 方式一：自动按需引入组件（**推荐**）

    [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。 

   - 安装插件：` npm i babel-plugin-import -D `

   -  在.babelrc 中添加配置 

     ```js
     module.exports = {
       plugins: [
         ['import', {
           libraryName: 'vant',
           libraryDirectory: 'es',
           style: true
         }, 'vant']
       ]
     };
     // 接着你可以在代码中直接引入 Vant 组件
     // 插件会自动将代码转化为方式二中的按需引入形式
     import { Button } from 'vant';
     ```

     >  Tips: 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。 

   2.2 方式二：手动按需引入组件

   ```js
   import Button from 'vant/lib/button';
   import 'vant/lib/button/style';
   ```

   2.3 方式三：导入所有组件

   ```js
   import Vant from 'vant';
   import 'vant/lib/index.css';
   
   Vue.use(Vant);
   ```

   >  Tips: 配置按需引入后，将不允许直接导入所有组件。 

3. 使用方式一提取到vant-ui.js中，在main中导入

## 4.基于[postcss](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/advanced-usage)插件 实现项目vw适配

1. 安装插件：`npm install postcss-px-to-viewport@1.1.1 -D`

2. 在根目录新建postcss.config.js文件，填入配置

   ```js
   // postcss.config.js
   module.exports = {
     plugins: {
       'postcss-px-to-viewport': {
         viewportWidth: 375,
       },
     },
   };
   ```

## 5. 路由设计配置

1. 分析项目页面，设计路由，配置一级路由。但凡是单个页面，独立展示的，都是一级路由

```
智慧商城
|——登录
|——首页架子
|  |——首页、分类、购物车、我的 == 二级路由
|——搜索页
|——搜索列表
|——商品详情
|——结算支付
|——订单管理
```

2. 阅读vant组件库文档，实现<strong style="color:red;">底部导航 tabbar</strong>

   - vant-ui.js 按需引入

     ```js
     import {Tabbar,TabbarItem} from 'vant'
     Vue.use(Tabbar)
     Vue.use(TabbarItem)
     ```

   - 在layout.vue页面中粘贴官方代码测试

   - 修改文字、图标、颜色

     ```vue
     <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
         <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
         <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
         <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
         <van-tabbar-item icon="user-o">我的</van-tabbar-item>
     </van-tabbar>
         
     data() {
         return {
           active: 0,
         };
     },
     ```

3. 基于底部导航，完成<strong style="color:red;">二级路由配置</strong>

   - 配置二级路由（规则&组件）

   - 配置导航链接

   - 配置路由出口

     ```
     {
         path:'/', 
         component: Layout,
         redirect:'/home',//重定向
         children:[
             {path:'/home', component: Home},
             {path:'/category', component: Category},
             {path:'/cart', component: Cart},
             {path:'/user', component: User},
         ]
     },
     ```

     