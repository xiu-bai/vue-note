import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
// import ProDetail from '@/views/prodetail'
// import Pay from '@/views/pay'
// import MyOrder from '@/views/myorder'
// 路由懒加载
const ProDetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User },
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    // 动态路由传参，确认将来是那个商品，路由参数中携带 id
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder },
  ]
})

// 所有的路由在真正被访问到之前(解析渲染对应组件页面前)，都会先经过全局前置守卫
// 只有全局前置守卫放行了，才会到达对应的页面

// 全局前置导航守卫
// to：到哪去
// form：从哪来
// next():是否放行
// (1) next()     直接放行，放行到to要去的路径
// (2) next(路径)  进行拦截，拦截到next里面配置的路径

// 定义一个数组，专门用户存放所有需要权限访问的页面
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, form, next) => {
  if(!authUrls.includes(to.path)){
    // 非权限页面
    next()
    return
  }

  // 权限页面需要token
  const token = store.getters.token
  // console.log(token);
  if(token){
    next()
  }else{
    next('/login')
  }
})

export default router
