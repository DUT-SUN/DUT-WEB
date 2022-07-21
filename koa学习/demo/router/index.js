const Router = require('koa-router')
const router=new Router();
const list=require('./list')
const home=require('./home')
const errorpages=require('./errorpages')
const login=require('./login')
router.get('/',async(ctx)=>{
    ctx.body="首页";
 
})

// router.get('/list',async(ctx)=>{
//     const items=
//         [
//         { "id": 1, "name": "Apples",  "price": "$2" },
//         { "id": 2, "name": "Peaches", "price": "$5" }
//         ] 
    
//     // let str=JSON.stringify(data);
//     ctx.body=items;
//     ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
// ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
// ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
// })
router.use('/home',home.routes(),home.allowedMethods());
router.use('/list',list.routes(),list.allowedMethods());
router.use('/404',errorpages.routes(),errorpages.allowedMethods());
router.use('/login',login.routes(),login.allowedMethods());
//路由重定向
// router.redirect('/','/home');
module.exports = router;