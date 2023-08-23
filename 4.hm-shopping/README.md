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
## 一.初始化项目
### 1. 创建项目
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
### 2. 调整初始化目录
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