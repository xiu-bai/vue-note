import { changeCount, delSelect, getCartList } from '@/api/cart'
import { Toast } from 'vant'

export default {
    namespaced: true,
    state() {
        return {
            catList: []
        }
    },
    mutations: {
        setCartList(state,newList){
            state.catList = newList
        }
    },
    actions: {
        async getCartAction(context) {
            const { data } = await getCartList();
            console.log(data);
            // 后台返回的数据中，不包含复选框的选中状态，为了实现将来的功能
            // 需要手动维护数据，给每一项，添加一个 isChecked 状态 (标记当前商品是否选中)
            data.list.forEach(item => {
                item.isChecked = true
            })
            context.commit('setCartList', data.list)
        },
    },
    getters: {}

}