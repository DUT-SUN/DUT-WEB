const net = require('net');

// tcp客户端
const client = net.connect({ port: 3000 }, () => {
    console.log('create connection to server');
    client.write('hello server!');
});

client.on('data', chunk => {
    chunk = chunk.toString();
    console.log(chunk);
    client.end();
});

client.on('error', err => {
    console.error(err);
});

client.on('end', () => {
    console.log('connection closed');
})
