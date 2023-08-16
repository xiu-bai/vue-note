import {
    reactive, onMounted, onBeforeUnmount
} from 'vue';
export default function (){
    // 实现鼠标打点的相关数据
    let point = reactive({
        x: 0,
        y: 0
    })
    // 实现鼠标打点的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(point.x,point.y);
    }
    // 实现鼠标打点相关的生命周期钩子
    // 挂在完毕
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    // 卸载之前
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
}

