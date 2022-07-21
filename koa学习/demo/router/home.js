const Router = require('koa-router')
const home=new Router();
const db= require('../utils/db')
home.get('/banner', async(ctx) => {
    //为啥用函数包装，因为要前面这个data先执行使用await，这样就先拿到数据再返回，不会先返回ctx.body
   let mydata= await new Promise((resolve, reject) => {
 //访问数据库，拿到banner这个数组
 return db.query(`SELECT * FROM BANNER`,(err,data) => {
    if(err) throw err;
    //后端拼接路径返回前端
    data.map(val=>{
        val.imgUrl='http://localhost:5050'+imgUrl;
    })
   resolve(data);
  })
    })
    ctx.body=mydata;
})
module.exports =home;