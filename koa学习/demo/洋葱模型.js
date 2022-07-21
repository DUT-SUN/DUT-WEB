const Koa=require('koa2');
const app=new Koa();
//express框架的中间件是逐个运行的
//但是koa的框架是洋葱模型，下面的这个实例就是 先是1然后await等待中间件2执行完，中间件2打印2以后等3执行完，最后打印出的是12321
//调用中间件
app.use(async(ctx,next)=>{
    //返回数据给页面
    console.log('1');
await next();
console.log('1');
});
app.use(async(ctx,next)=>{
    //返回数据给页面
    console.log('2');
await next();
console.log('2');
});
app.use(async(ctx,next)=>{
    //返回数据给页面

console.log('3');
});
const port=5050;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})