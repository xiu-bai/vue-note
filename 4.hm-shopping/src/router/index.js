import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/login', component: Login},
    {path:'/layout', component: Layout},
    {path:'/search', component: Search},
    {path:'/search', component: SearchList},
    // 动态路由传参，确认将来是那个商品，路由参数中携带 id
    {path:'/prodetail/:id', component: ProDetail},
    {path:'/pay', component: Pay},
    {path:'/myorder', component: MyOrder},
  ]
})

export default router
