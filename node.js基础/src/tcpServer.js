const net = require('net');

// 创建 tcp 服务器
let server = net.createServer(socket => {
    console.log('create connection with ', `${socket.remoteAddress}:${socket.remotePort}`);
    socket.on('data', chunk => {
        chunk = chunk.toString();
        console.log(chunk);
    });

    // error事件
    socket.on('error', err => {
        console.error(err);
    });

    // end事件，连接断开时触发
    socket.on('end', () => {
        console.log('connection lost');
    });

    // 向套接字中写入内容
    socket.write('hello!');
    socket.pipe(socket);
});

server.on('error', err => {
    console.error(err);
});

server.listen(8124);