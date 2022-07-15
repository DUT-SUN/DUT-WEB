//导入react
import React from 'react'
import ReactDOM from 'react-dom'
//2.创建react元素
const title=React.createElement('h1',null,'Hello React !')
ReactDOM.render(title,document.getElementById('root'))//在public下的index.html中已经创建了root了
//假如你是渲染页面就调用ReactDOM假如你要是做安卓或者ios就需要用的Reactnative的渲染方式
