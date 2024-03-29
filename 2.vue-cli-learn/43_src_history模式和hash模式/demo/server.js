const express = require('express')
const history = require('connect-history-api-fallback');
const app = express();

//中间件
//服务器中间件专门解决history模式(vue)出错的问题 (前端路由,后端路由混杂)
///注意如果是hash模式就不会有这个问题
app.use(history())
app.use(express.static(__dirname+'/static'))

// request,response: req,res
app.get('/person',(req,res) => {
    res.send({
        name: 'John',
        age:18,
    })
    // res.status(200).json({
    //     name: 'John',
    //     age: 21
    // })
})

app.listen(5005,(err)=>{
    if(!err){
        console.log('服务器启动成功');
    }
})
