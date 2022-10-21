# CORS
[跨源资源共享](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
## 1) CORS 是什么？
CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS 是官方的跨域解决方
案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持
get 和 post 请求。跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些
源站通过浏览器有权限访问哪些资源
## 2) CORS 怎么工作的？
CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应
以后就会对响应放行。
## 3) CORS 的使用
```javascript
router.get("/testAJAX" , function (req , res) {

//通过 res 来设置响应头，来允许跨域请求
//res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
res.set("Access-Control-Allow-Origin","*");
res.send("testAJAX 返回的响应");
});
```
## 说明
在学习ajax开始就使用了cors方法解决跨域问题，也就是服务器设置响应头。
1、普通跨域请求：只需服务器端设置Access-Control-Allow-Origin
2、带cookie跨域请求：前后端都需要进行设置
```javascript
 response.setHeader('Access-Control-Allow-Origin', '*')
```