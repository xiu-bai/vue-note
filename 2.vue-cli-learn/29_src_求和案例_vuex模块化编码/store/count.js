// 求和相关的配置
export default {
    namespaced: true,
    actions:{
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jianWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations:{
        //收到state和要操作数value
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state:{
        sum: 0, //当前的和
        school:'北京',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}

// export default countOption;