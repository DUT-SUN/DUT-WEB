//exports对象和module.exports指向的是同一个对象
const x= require('./模块化')
if(exports===module.exports)
{
    console.log("相等")
}
else
{
    console.log("不相等")
}

