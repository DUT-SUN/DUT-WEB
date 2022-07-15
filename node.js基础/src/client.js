const http = require('http');

// http请求的设置
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  };

// 发送请求
const client = http.request(options, (res) => {
    console.log(res);
    // console.log('headers: ', JSON.stringify(res.headers));
    // console.log('status: ', res.statusCode);
    res.setEncoding('utf-8');

    res.on('data', chunk => {
        console.log(`body: ${chunk}`);
    });
    res.on('end', () => {
        console.log('no more to read');
    });
});

client.on('error', () => {
    console.log('something is wrong!');
});

client.end();