const koa = require('koa');
const router = require('koa-router')();
const body = require('koa-body');
const app = new koa();
const fs = require('fs');
const url = require('url');
const path = require('path');
const bodyparser = require('koa-bodyparser');

// 文件上传的支持
app.use(body({
    multipart: true,
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024,
        multipart: true
    }
}));

app.use(bodyparser());

router.get('/', (ctx, next) => {
    ctx.type = 'html';
    const filePath = path.join(__dirname, '/public/upload.html');

    ctx.body = fs.createReadStream(filePath);
});

// upload逻辑
router.post('/upload', (ctx, next) => {
    try {
        // 组装出上传的路径
        const filePath = path.join(__dirname, '/public/');
    
        // 可读流和可写流
        let readStream,
            writeStream;
    
        // 获取文件
        let files = ctx.request.files.file;
        // 判断是否是批量上传
        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                readStream = fs.createReadStream(files[i].path);
                writeStream = fs.createWriteStream(path.join(filePath, files[i].name));
                readStream.pipe(writeStream);
            }
            ctx.statusCode = 200;
            ctx.body = {
                multi: true,    //是否批量上传
                code: 0,
                msg: '上传成功'
            }
        } else {
            readStream = fs.createReadStream(files.path);
            writeStream = fs.createWriteStream(path.join(filePath, files.name));
            readStream.pipe(writeStream);
            ctx.statusCode = 200;
            ctx.body = {
                multi: false,
                code: 0,
                msg: '上传成功'
            }
        }
    } catch(err) {
        console.error(err);
        ctx.body = {
            code: -1,
            ErrorInfo: new Error(err)
        }
    }


});

// 使用router
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('now listening ', port);
});