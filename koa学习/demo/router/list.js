//这个文件专门存放关于列表的所有接口
const Router = require('koa-router');
const list=new Router();
//写对应的接口
list.get('/',async(ctx)=>{
    // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    const items=
    [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
    ] 

// let str=JSON.stringify(data);
ctx.body=items;
})  
list.get('/yinger',async (ctx)=>{
    


    ctx.body="婴儿用品";
})
list.get('/wanju',async (ctx)=>{


    ctx.body="玩具页面";
})

module.exports =list;
