//引入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则
//request封装请求报文
//response封装响应报文
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX')
})

//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中");
})