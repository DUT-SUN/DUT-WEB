const http = require('http');//导入http模块
const server=http.createServer();//创建web服务器实例

//3.绑定request事件到服务器
server.on('request', function(req,res){
    console.log("someone visit our web server!")   
})

//4.启动服务器
server.listen(8080,function(req,res){
console.log("server running at http://127.0.0.1:8080")
})