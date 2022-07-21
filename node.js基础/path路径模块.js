const path=require('path')
// const pathStr=path.join('/a','/b/c','../','/d')//这个../可以抵消一个路径
// console.log(pathStr)
//今后设计路径拼接用下面的方法

const fs=require('fs')
fs.readFile (path.join(__dirname,'./1.txt'),'utf8',function(err,dataStr){
    if(err) return console.log(err)
     console.log(dataStr)
})
//这样可以防止加号连接的错误比如在那个 /1.txt前面现在加点没有问题，但是用加号连接的时候会报错


// path.basename方法可以给你返回最后路径
const fpath='/a/b/c/index.html'
// const fullname=path.basename(fpath)
// console.log(fullname)
const namewithoutExt=path.basename(fpath,'.html')//加.html去除扩展名会输出index,假如不加.那么最后输出是index.
console.log(namewithoutExt)
