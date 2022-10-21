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
    response.send('HELLO AJAX GET')
})
app.post('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Header', '*')
    //设置响应体
    response.send('HELLO AJAX POST')
})
//JSON
app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Header', '*')
    //响应数据
    const data = {
        name: 'guigu'
    }
    //将对象转化成字符串
    let str = JSON.stringify(data)
    //设置响应体
    response.send(str)
})
//延时响应
app.get('/timeout', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(() => {
        response.send('TimeOut')
    }, 3000)
})
//JSONP
app.all('/jsonp-server', (request, response) => {
    // 返回的必须是一段js代码
    // response.send("console.log('hello jsonp-server')")
    const data = {
        name: 'guigu'
    }
    let str = JSON.stringify(data)

    response.end(`handle(${str})`)
})
//JSONP实践
app.all('/check-uername', (request, response) => {
    // 返回的必须是一段js代码
    // response.send("console.log('hello jsonp-server')")
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    let str = JSON.stringify(data)

    response.end(`handle(${str})`)
})
//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中");
})