const fs = require('fs')
const path= require('path')

function readFileFn(args) {
return new Promise((resolve, reject)=>{
    let mypath = path.join(__dirname,`../assets/${args}.txt`)
    // 测试读取vue.txt文件
    fs.readFile(mypath, (err, data)=>{
        //异步函数
      if(err) throw err;
      // 这里读取到的文件是二进制文件流，因此要转字符串
      resolve(data.toString());
    })
   
})
}
let vueTxt=readFileFn('vue');
let reactTxt=readFileFn('react');
let angularTxt=readFileFn('angular');
// 给表zixun添加数据
const db = require('./db')
let data = [
    {id: 0, icon: '/images/angular.gif', subtitle: "学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上", title: "一套框架多种平台 移动端&桌面端"},
    {id: 1, icon: '/images/vue.gif', subtitle: "不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩", title: "渐进式的JavaScript 框架"},
    {id: 2, icon: '/images/react.gif', subtitle: "组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离", title: "用于构建用户界面的 JavaScript 库"},
]

data.map(val=>{
    let sql = `INSERT INTO zixun VALUES (${val.id}, '${val.title}', '${val.subtitle}', '${val.icon}')`;
    db.query(sql, (err, data)=>{
        if(err) console.log(err);
        console.log(data)
    })
})





let vueContent, reactContent, angularContent;
var fn = async () => {
  	// 分别读取这几份txt文件
    vueContent = await readFileFn('vue');
    reactContent = await readFileFn('react');
    angularContent = await readFileFn('angular');

    let data = [
        {id: 0, title: "一套框架多种平台 移动端&桌面端", author: "张三丰", date: "2013-03-22", imgUrl: "/images/dt.png", content: angularContent},
        {id: 1, title: "渐进式的JavaScript 框架", author: "小鱼儿", date: "2014-04-23", imgUrl: "/images/dt.png", content: vueContent},
        {id: 2, title: "一套框架多种平台 移动端&桌面端", author: "花无缺", date: "2015-05-24", imgUrl: "/images/dt.png", content: reactContent}
    ]

    data.map(val=>{
        let sql = `INSERT INTO article VALUES (${val.id}, '${val.title}', '${val.author}', '${val.date}', '${val.imgUrl}', '${val.content}')`;
        db.query(sql, (err, data)=>{
            if(err) console.log(err);
            console.log(data)
        })
    })
}
fn();
