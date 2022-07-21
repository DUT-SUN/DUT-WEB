const Koa=require('koa2');
const Router=require('koa-router');
const app=new Koa();
const router =require('./router/index')
const cors=require('koa2-cors');
const path = require('path')
//router.routes启动路由,router.allowedMethods()允许任何请求
// 安装koa-static




const static = require('koa-static')

// 获取静态资源文件夹
app.use(static(path.join(__dirname+'/assets')));
//然后就可以直接通过网址比如localhost:5050/images/banner1.png注意不要加assets因为已经拼接了

// 匹配不到页面的全部跳转去404
app.use(async (ctx, next) => {
    await next();
    if (parseInt(ctx.status) === 404) {
        ctx.response.redirect("/404")
    }
})
app.use(cors());
app.use(router.routes(), router.allowedMethods());

//调用中间件
// app.use(async(ctx)=>{
//     //返回数据给页面
//     ctx.response.body="这是首页";
// });

const port=5050;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})