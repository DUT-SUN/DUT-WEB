const fs = require("fs");
const path = require("path");
const regStyle=/<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'/index.html'),'utf8', function(err,dataStr){
    if(err) return console.log("读取文件失败")
    resolveCSS(dataStr)
})
function resolveCSS(htmlStr){
    const r1=regStyle.exec(htmlStr);
    const newCSS =r1[0].replace('<style>','').replace('<\/style>','')
    fs.writeFile(path.join(__dirname,'/index.css',newCSS),'utf8', function(err,dataStr){
        if(err) return console.log("读取html文件失败!"+err.message)
    })
    resolveCSS(dataStr) 
    resolveJS(dataStr)
}
function resolveCSS(htmlStr){
    //使用正则提取需要的内容
    const r1=regStyle.exec(htmlStr)
const newCSS=r1[0].replace('<style>','').replace('</style>','')
fs.writeFile(path.join(__dirname,'/index.css',),newCSS, function(err,dataStr){
    if(err)
    return console.log("写入CSS失败")
    console.log("写入CSS成功")
})
}
function resolveJS(htmlStr){
    //使用正则提取需要的内容
    const r2=regStyle.exec(htmlStr)
const newJS=r2[0].replace('<Script>','').replace('</Script>','')
console.log(newJS)
fs.writeFile(path.join(__dirname,'./index.js'),newJS,function(err){
    if(err)return console.log("写入js脚本文件失败!"+err.message)
console.log("写入脚本成功")
})
}
function resolveHTML(htmlStr){
    htmlStr.replace(regStyle,'<link rel="stylesheet href="./resolve.css"/>').replace(regScript,'<script src="./index.js"></script>')
fs.writeFile(path.join(__dirname,'./index.html'),newHTML,function(err){
    if(err)return console.log('写入html文件失败'+err.message)
    console.log("写入html页面成功")
})
}
