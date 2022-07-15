const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');
const url = require('url');

module.exports = class staticServer {
    constructor(options = {}) {
        this.option = {
            port: 3000,
            host: 'localhost',
            currConnection: null,
            filePath: './public',
            
            homePage: '/index.html'
        }

        // 将传入的options加载入option
        for (let x in options) {
            this.option[x] = options[x];
        }
    }

    run() {
        this.option.currConnection = http.createServer((req, res) => {
            let tempUrl = url.parse(req.url).pathname;   //获得文件路径
            let fileDir = tempUrl === '/' ? this.option.homePage : tempUrl;
            let filePath = path.join(this.option.filePath, fileDir);
            console.log(filePath);
            // 检查文件是否存在
            this.checkFilePromise(filePath)
                .then(() => {
                    return this.readFilePromise(filePath);
                })
                .then(data => {
                    this.sendData(res, data, fileDir);
                })
                .catch(() => {
                    this.catch404(res);
                });
        }).listen(this.option.port, () => {
            console.log('server running at ', this.option.host, ':', this.option.port);
        });
    }

    close() {
        this.currConnection.close((err) => {
            if (err) return console.error(err);
            else return console.log('connection closed');
        });
    }

    // 发送信息
    sendData(res, data, url) {
        res.writeHead(200, { 'Content-Type': mime.getType(url) });
        res.end(data);
    }

    // 捕获404
    catch404(res) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Found');
        res.end();
    }

    // Promise封装读文件
    readFilePromise(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) reject(err);
                else {
                    resolve(data);
                }
            });
        })
    }

    // 检查文件是否存在
    checkFilePromise(filePath) {
        return new Promise((resolve, reject) => {
            fs.access(filePath, fs.R_OK, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('exist!');
                }
            })
        })
    }
}