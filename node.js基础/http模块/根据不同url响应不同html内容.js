const http= require('http')
const server= http.createServer()
server.on('request',(req,res)=>{
const url= req.url;
let content='404 NOT FOUND'
if(url==='/' || url==='/index.html'){
content='<h1>首页</h1>'
}
else if(url==='/about.html'){
    content='<h>关于页面</h>'
}
res.setHeader('Content-Type', 'text/html; charset=utf8')
res.end(content)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})