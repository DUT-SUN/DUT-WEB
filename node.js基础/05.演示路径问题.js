const fs=require("fs");
//出现路径拼接问题是因为出现了./和.//的相对路径
//只需要给绝对路劲即可

// 移植性非常差不利于后期维护
// fs.readFile("C:\\Users\\lenovo\\Desktop\\node.js基础\\1.txt",'utf8',function(err,dataStr){
//     if(err) return console.log(err);
//     console.log('读取文件成功！'+dataStr);
// })


fs.readFile(__dirname+'/1.txt','utf8',function(err,dataStr){
    if(err){ 
    return console.log(err);
    }
    console.log('读取文件成功！'+dataStr);
})
