import { getInfo, setInfo } from '@/utils/storage'
export default {
    namespaced: true,//开启命名空间
    state() {//提供数据
        return {
            // 个人权证相关
            userInfo: getInfo()
        }
    },
    // 提供修改数据的方法
    mutations: {
        // 所有mutations的第一个参数，都是state
        setUserInfo(state, obj) {
            state.userInfo = obj
            setInfo(obj)
        }
    },
    // 提供异步操作
    actions: {
        logout(context){
            // 个人信息重置
            context.commit('setUserInfo',{})

            // 购物车信息重置(跨模块调用 mutation) 'cart/setCartList'
            context.commit('cart/setCartList', [], { root: true })
        }
    },
    // 提供基于state所派生出的一些属性
    getters: {}
}