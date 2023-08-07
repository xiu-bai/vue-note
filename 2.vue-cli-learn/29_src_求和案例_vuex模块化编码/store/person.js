import axios from "axios";
import { nanoid } from "nanoid";
// 求和相关的配置
export default {
    namespaced: true,
    actions:{
        addPersonBai(context,value){
            if(value.name.indexOf('白') === 0){
                context.commit('ADD_PERSON',value);
            }else{
                alert('添加的人必须姓白')
            }
        },
        addPersonServer(context){
            axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`).then(res=>{
                context.commit('ADD_PERSON',{id:nanoid(),name:res.data});
            },error=>{
                alert(error.message);
            })
        }
    },
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList: [{id:'001', name:'修白'}],
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name || ''
        }
    },
}