// // 演示 Node.js 作用

const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello!');
});

// 获取端口号
const port = process.env.port || 3000;

// 监听获取的端口
server.listen(port, () => {
    console.log('server running at ', port);
});

// 演示模块


// const calc = require('./src/module');
// console.log(calc().add(1, 2));
