import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Time1 from './Time1';
import Timecount from './Timecount'

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>    <li>{number}</li>  );  return (
//       <ul>{listItems}</ul>  );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,  document.getElementById('root')
//   );
// ReactDOM.render(<Timecount/>,document.getElementById('root'))
// ReactDOM.render(<Time1/>,document.getElementById('root1'))
// const title=(<h1 className="title">Hello JSX!<span/></h1>)//假如小括号，避免js自动插入分号的陷阱
// ReactDOM.render(title,document.getElementById('root'))
// const name='jack'
// const age=19;
// const dx=(
//   <div>我是：{name}年龄:{age}</div>
// )
// ReactDOM.render(dx,document.getElementById('root'))
 



//jsx的条件渲染

// const isLoading=false
// // const loadData =()=>{
// //   if(isLoading){
// //     return <div>loading...</div>
// //   }
// //   return <div>数据加载完成，此处显示加载后的数据</div>
// // }
// const loadData =()=>{
//   // return isloading&&(<dov>loading...</dov>)
// return isLoading?(<div>loading...</div>):(<div>数据加载完成，此处显示加载后的数据</div>)
// }
// const title=(
//   <h1>条件渲染:{loadData()}</h1>
// )
// ReactDOM.render(title,document.getElementById('root'))

//JSX的列表渲染
// const songs=[
//   {id:1, name:"痴心绝对"},
//   {id:2,name:'像我这样的人'},
//   {id:3,name:'南山南'},
// ]
// const list=(
//   <ul>
//     {songs.map(item => <li key={item.id}>{item.name}</li>)}//每个都有唯一key属性尽量避免索引号来作为key
//   </ul>
// )
// ReactDOM.render(list,document.getElementById('root'))

//JSX的样式处理
//1.行内样式——stytle

// const songs=[
//   {id:1, name:"痴心绝对"},
//   {id:2,name:'像我这样的人'},
//   {id:3,name:'南山南'},
// ]
// const list=(
//   <ul>
//     {songs.map(item => <li style={{color:'red',background:'skyblue'}} key={item.id}>{item.name}</li>)}
//     {/* 每个都有唯一key属性尽量避免索引号来作为key */}
//   </ul>
// )
// ReactDOM.render(listdocument.getElementById('root'))

//2.类名添加样式
//引入css
// import './index.css'
// const list=(
//   <h1 className='title' style={{color:'green',background:'skyblue'}}>学习中</h1>
// )
// ReactDOM.render(list,document.getElementById('root'))

//1.使用函数创建组件
// 函数组件：使用js的函数创建的组件
// 约定1：函数名称必须以大写字母开头来和普通React元素区分
//约定2：必须有返回值，不想返回就返回null
// function Hello(){
// return (
//   <div>这是我的第一个函数组件</div>
// )
// }
// const Hello=()=><div>
// 这是我第一个函数组件
// </div>
// ReactDOM.render(<Hello/>,document.getElementById('root'))
//  当项目组件多了之后，该字母组织这些组件呢？
//  选择1：将所有组件放到一个单独的JS文件中
// 选择2：将每个组件放到单独的JS文件中

//答案是选择2

//抽离为独立JS文件的步骤
// 1.创建Hello.js
// 2.在hello.js中导入ReactDOM
// 3.创建组件（函数或类）
// 4.在hello.js中导出该组件
// 5.在index.js中导入hello组件
//6.渲染组件
// import Hello from './Hello'
// ReactDOM.render(<Hello/>,document.getElementById('root'))

//React事件处理
//React事件绑定语法与DOM事件语法相似
//语法:on+事件名称={事件处理程序}比如onClick={()=>{}}
//注意:React事件采用驼峰命名法，比如onMouseEnter、onFocus

//1.类绑定事件
// class App extends React.Component{
//   handleClick(){
//     console.log('单击事件触发了')
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>点我点我</button>
//     )
//   }
// }
// ReactDOM.render(<App/>,document.getElementById('root'))


//2.函数组件绑定事件
// function App(){
//   function handle()
//   {
//     console.log('绑定成功')
//   }
//   return <button onClick={handle}>按钮</button>
// }
// ReactDOM.render(<App />,document.getElementById('root'))

//事件对象
// class App extends React.Component{
//   handleClick(e){
//     e.preventDefault()
//   // 点击之后触发的事件传过来然后被这个函数阻止了
//     console.log('a标签的单击事件触发了')
//   }
//   render(){
//   return (
//     <a href="http://bilibili.com" onClick={this.handleClick}>b站</a>
//   )
// }
// }
// ReactDOM.render(<App />,document.getElementById('root'))

//有状态组件（类组件）动态效果和无状态组件（函数组件）静态效果
// var n=0;
// document.getElementById("root").innerHTML ='计数器:0'
// class App extends React.Component{
//   handleClick(){
//     n++;
//     (document.getElementById("root").innerHTML="计数器:"+n)
//   }
// render(){
//   return (
//     <button onClick={this.handleClick}>+1</button>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root1'))

//组件中state和setState
//状态state就是数据的意思，是组件的内部数据，只能在组件内部使用
//state的值是对象，表示一个组件中可以由多个数据

//对于上面我自己写的代码的优化版本（利用这个state）

// // class App extends React.Component{
//   // constructor(){
//   //   super()
//   //   this.state={
//   //     count:0
//   //   }
//   // }
//   //简化版本：
//   state={count:0}
//   render(){
//     return (
//   <div> <h1>计数器:{this.state.count}</h1> 
//   <button onClick={()=>{
// this.setState({count:this.state.count+1})
//   }}>+1</button>
//   </div>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root'))

//从JSX抽离事件处理程序
//抽离js代码
//需要下面的知识this指向
//1.箭头函数:因为箭头函数不需要this指针，所以在箭头函数中使用的this.state对象其实是函数外的render方法的this也就是这个app的实例
// class App extends React.Component{
//   state={count:0}
// onClickment=()=>{
//     this.setState({count:this.state.count+1})
// }
// //谁调用他this就指向谁,也就是这个this指向的是render方法的实例
//   render(){
//     return (
//   <div> <h1>计数器:{this.state.count}</h1> 
//   <button onClick={this.onClickment}
//   >+1</button></div>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root'))
//2.bind方法抽离事件处理程序
//bind方法将this与组件实例绑定到一起
// class App extends React.Component{
//   state={count:0}
//   constructor(){
//     super()
//     this.onClickment=this.onClickment.bind(this)
//   }
// onClickment(){
//     this.setState({count:this.state.count+1})
// }
// //谁调用他this就指向谁,也就是这个this指向的是render方法的实例
//   render(){
//     return (
//   <div> <h1>计数器:{this.state.count}</h1> 
//   <button onClick={this.onClickment}
//   >+1</button></div>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root'))

//3.利用箭头函数形式的class实例方法
// class App extends React.Component{
//   state={count:0}
// onClickment=()=>{
//     this.setState({count:this.state.count+1})
// }
//   render(){
//     return (
//   <div> <h1>计数器:{this.state.count}</h1> 
//   <button onClick={this.onClickment}
//   >+1</button></div>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root'))

//具体总结
//这三种方法建议是使用创建一个箭头函数里面写jsx的语句
//其次是在button里面绑定的时候使用箭头函数
//最后就是用bind方法绑定this到那个函数上


//！！！表单处理~！！！

//受控组件：受到React控制的表单元素
//HTML的元素有自己的可变状态
//而React的可变状态都通常保存在state中，并且只能通过setstate来修改
//这样就产生了冲突

//步骤：

// class App extends React.Component{
//   state={txt:''}
//   txtChange= e=>{
//     this.setState({txt:e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <input type="text" value={this.state.txt} onChange={this.txtChange} />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'))


// class App extends React.Component{
// state={txt:'',content:'',city:'bj',isChecked:''}
// handleChange=e=>{
// this.setState({txt:e.target.value}) 

// }
// handleContent=e=>{
//     this.setState({content:e.target.value})   
// }
// handleCity=e=>{
//     this.setState({city:e.target.value})
// }
// handeleChecked=e=>{this.setState({isChecked:e.target.checked})}
// render(){
//     return(
//         <div>
//             <input type="text" value={this.state.txt} onChange={this.handleChange}/>
//             <br/>
//             <textarea value={this.state.content} onChange={this.handleContent}></textarea>
//             <br/>
//             <select  value={this.state.value} onChange={this.handleCity}>
//                 <option value="sh">上海</option>
//                 <option value="bj">北京</option>
//                 <option value="gz">广州</option>
//             </select>
//             <br></br>
//             <input type="checkbox" chaecked={this.state.isChecked} onChange={this.handeleChecked}></input>
//         </div>
//     )
// }
// }
// render(<App />,document.getElementById('root'))

//多表单数据优化
//每个表单都有一个自己的处理程序

// 优化步骤
//1.给表单元素添加name属性，名称于state相同
//2.根据表单元素类型获取对应值
//3.在change时间处理程序当中通过[name]修改对应的state

// class App extends React.Component{
//     state={txt:'',content:'',city:'bj',isChecked:''}
//     handleForm=e=>{
//         const target=e.target
//         const value =target.type==='checkbox' ?target.checked:
//         target.value
//         const name=target.name
//         this.setState({[name]:value})
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" name="txt" value={this.state.txt} onChange={ this.handleForm}/>
//                 <br/>
//                 <textarea name="content"value={this.state.content} onChange={this.handleForm}></textarea>
//                 <br/>
//                 <select name="city" value={this.state.value} onChange={this.handleForm}>
//                     <option value="sh">上海</option>
//                     <option value="bj">北京</option>
//                     <option value="gz">广州</option>
//                 </select>
//                 <br></br>
//                 <input type="checkbox" name="isCheacked" checked={this.state.isChecked} onChange={this.handleForm}></input>
//             </div>
//         )
//     }
//     }
//     render(<App />,document.getElementById('root'))

//非受控组件
//借助ref，使用原生DOM方式获取表单元素值
//ref的作用：获取DOM或组件
//使用步骤:调用React.createRef创建一个ref对象
//将创建好的ref对象添加到文本框中
//通过ref对象获取到文本框的值

// class App extends React.Component {
//     constructor(){
//         super()
//         this.txtRef=React.createRef()
//     }
//     getTxt=()=>{
//         console.log('文本框的值为:',this.txtRef.current.value)
//     }
//     render(){
//         return (<div>
//             <input type="text" ref={this.txtRef}></input>
//             <button onClick={this.getTxt}>获取文本框的值</button>
//         </div>)
//     }
// }
// ReactDOM.render(<App />,document.getElementById('root'))


//案例评论列表
class App extends React.Component {
    state={
        comments:[
            {id:1,name:'jack',content:'沙发!!!'},
            {id:2,name:'rose',content:'板凳~'},
            {id:3,name:'tom',content:'楼主好人'}
        ],
        userName:'',
        userContent:''
    }
//处理表单元素值
handleFrom=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
}
addComment=(e)=>{
    const {comments,userName,userContent}=this.state
    if(userName.trim()===''||userContent.trim()==='')
    {alert('请输入评论人和评论内容')
    return}
    const newComments=[{id:Math.random(),
        name:userName,
        content:userContent},...comments]

        this.setState({
            comments:newComments,
            userName:"",
            userContent:""
        })
}
    renderlist(){
        const {comments} =this.state 
        if(comments.length===0)
        {
            return    <div className="no-comments">暂无评论，快去评论吧！</div>
        }
        return(<ul>
            {comments.map(item=>(
                <li key={item.id}>
                    <h3>
                        评论人:{item.name}
                    </h3>
                    <p>评论内容：{item.content}</p>
                </li>
            )
            )}
        </ul>)
        }
    render(){
        const {userName, userContent} = this.state
        return(
            <div className="app">
                <input className="user" type="text" placeholder="请输入评论人" value={userName} name="userName" onChange={this.handleFrom}/>
                <br></br>
                <textarea className="content"
                cols="30" rows="10"
                placeholder="请输入评论内容"
                value={userContent}
                name="userContent"
                onChange={this.handleFrom}/>
                <br/>
                <button onClick={this.addComment}>发表评论</button>
                {this.renderlist()}
            </div>
            
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'))

//props的使用
// class Hello extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         console.log(this.props.name)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>props:{this.props.name}     {this.props.age}</h1>
//                 {this.props.fn()}
//                 {this.props.tag}
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Hello name="sun" age={19} colors={['red','green']} fn={()=>{console.log('牛马')}} tag={<p>niuma</p>}/>,document.getElementById('root'))

//父组件到子组件
// class Parent extends React.Component{
// state = {
//     lastName:'王'
// }
// render(){
//     return(
//     <div className="parent"> 
//         父组件:
//         <Child name={this.state.lastName} />
//     </div>)
// }
// }
// const Child = (props)=>{
//     console.log('子组件:',props)
//     return (
//         <div className="child">
//             <p>子组件接受到父组件的数据:{props.name}</p>
//         </div>
//     )
// }
// ReactDOM.render(<Parent/>,document.getElementById('root'))

//子到父传数据,利用回调函数，父组件提供回调函数，子组件调用，将要传递的数据作为回调函数的参数

// class Parent extends React.Component{
//     //提供回调函数
//     state={
//         parentmsg:''
//     }
//     getChildMsg=data=>{
//        this.setState({
//     parentmsg:data
//        })
//     }
// render(){
//     return(
//     <div className="parent"> 
//         父组件:{this.state.parentmsg}
//         <Child getMsg={this.getChildMsg} />
//     </div>)
// }
// }
// class Child extends React.Component{
//     state={
//     msg:'666'
//     }
//     handleClick=()=>{
// this.props.getMsg(this.state.msg)
//     }
//     render(){
//         return (
//             <div className="child">
// 子组件:<button onClick={this.handleClick}>点我，给父组件传递数据</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Parent/>,document.getElementById('root'))

//兄弟组件
// class Counter extends React.Component{
//     state={
// count:0,
//     }
//     handleClick=()=>{
// this.setState({count:this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                 <Child1 count={this.state.count}/>
//                 <Child2 handleClick={this.handleClick}/>
//             </div>
//         )
//     }
// }
// const Child1=props=>{
// return <h1>计数器:{props.count}</h1>
// }
// const Child2=props=>{
//     return <button onClick={()=>props.handleClick()}>+1</button>
// }
// ReactDOM.render(<Counter/>,document.getElementById('root'))