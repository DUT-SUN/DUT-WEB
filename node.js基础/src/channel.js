/*
简易聊天服务器
《Node.js实战上的一个例子》
*/

// 引入依赖
const net = require('net');
const EventEmitter = require('events').EventEmitter;

const channel = new EventEmitter();     // channel实例
channel.clients = {};       // 连入的用户
channel.broadcast = {}                 // 用户用于广播信息的监听器

/*
channel有三个事件：
1. connect      连接入事件
2. broadcast        广播事件
3. leave        断开连接事件
 */

channel.on('connect', function(id, socket) {
    this.clients[id] = socket;
    this.broadcast[id] = (senderid, message) => {
        if (id !== senderid) {
            this.clients[id].write(message);
        }
    }
    channel.on('broadcast', this.broadcast[id]);
});

// 创建聊天服务器
let server = net.createServer(socket => {
    let id = `${socket.remoteAddress}:${socket.remotePort}`;
    channel.emit('connect', id, socket);
    console.log(`${id} log in`);
    socket.on('data', chunk => {
        chunk = chunk.toString();
        channel.emit('broadcast', id, chunk);
    });
    socket.on('error', (err) => {
        console.error(err);
    });
});

server.on('error', err => {
    console.error(err);
});

process.on('uncaughtException', err => {
    console.error(err);
});

server.listen(3000, () => {
    console.log('server running at 3000');
});
