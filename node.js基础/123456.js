// const fs = require('fs')

// fs.writeFile('./1.txt','123','utf8',function(err)
// {
// console.log(err)
// })
// fs.readFile('./1.txt','utf8',function(err,dataStr){

//     if(err){
//         return console.log('读取文件错误'+err.message)
//     }
//     console.log('读取文件成功' + dataStr)
// })
const fs=require('fs')
fs.readFile('./成绩.txt','utf8',function(err,dataStr){
    if(err){return console.log('读取文件失败！'+err.message)}
    const arr0ld=dataStr.split(' ')
const arrNew=[]
arr0ld.forEach(item => {
arrNew.push(item.replace('=',':'))
})
const arrStr=arrNew.join('\n')
console.log(arrStr)
fs.writeFile('./成绩ok.txt',arrStr,function(err){
    if(err)
    {return console.log('成绩写入失败')}
    return console.log('成绩写入成功！！')
})
})

