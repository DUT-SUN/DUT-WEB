const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    const url=req.url
    const method=req.method
    const str=`您请求的url地址是${url},请求的 method类型是${method}`
    console.log(str)
    //为防止中文乱码问题，需要设置响应头
    res.setHeader('Content-Type', 'text/html: charset=utf8')
    //调用res.end方法向客户端发送一些内容
    res.end(str)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})