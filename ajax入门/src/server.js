
//1.引入express
const express =require('express'); 
//2.创建应用对象
const app=express();
//3.创建路由规则
//req和res分别是请求报文和响应报文的封装
app.get('/ie',(req, res) => {
    //设置响应头,设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data={
        name:'SUN'
    };
    //对上面这个对象做了一个字符串转化
    let str=JSON.stringify(data);
    res.send(str);

})
app.get('/delay',(req, res) => {
    //设置响应头,设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    setTimeout(() =>{
        res.send('请求超时')
            },3000)
})
app.all('/server',(req, res) => {
    //设置响应头,设置允许跨域
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, POST, GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-type,height,weight,a,b");
    const data={
        name:'SUN'
    };
    //对上面这个对象做了一个字符串转化
    let str=JSON.stringify(data);
    res.send(str);
})
app.all('/jsonpserver',(req, res) => {
     
const data={
    name:'SUN'
};
let str=JSON.stringify(data);
res.end(`handle(${str})`);
})
app.all('/check-username',(req, res) => {
     
    const data={
        exist:1, 
        msg:'用户名已经存在'
    };
    let str=JSON.stringify(data);
    res.end(`handle(${str})`);
    })

app.all('/cors-server',(req, res) => {
     res.setHeader("Access-Control-Allow-Origin", "*")
        res.send("hello CORS");
        })
//4.监听端口启动服务
app.listen(8000,() => {
    console.log('服务已经启动,8000端口监听中！');
})
