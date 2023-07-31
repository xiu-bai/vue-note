//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//引入vuex
// import Vuex from "vuex";
//引入store
import store from "./store";
//关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
// Vue.use(Vuex)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});