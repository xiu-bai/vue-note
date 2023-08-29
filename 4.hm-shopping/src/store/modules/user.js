export default{
    namespaced:true,//开启命名空间
    state(){//提供数据
        return{
            // 个人权证相关
            userInfo:{
                token:'',
                userId:''
            }
        }
    },
    // 提供修改数据的方法
    mutations:{
        // 所有mutations的第一个参数，都是state
        setUserInfo(state,obj){
            state.userInfo = obj
        }
    },
    // 提供异步操作
    actions:{},
    // 提供基于state所派生出的一些属性
    getters:{}
}