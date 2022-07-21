import React,{useState,useContext} from "react";
//使用钩子来处理
import moment from 'moment'

import{MyContext}from "./MyProvider"
const inputstyle={
    width:'50px'
}
//props:Ipros限定只能有addTODO不能传其他的
const TodoInput=() =>{
    const [text,setText]=useState('');
    const [text1,setText1]=useState('');
    const [text2,setText2]=useState('');
    const [text3,setText3]=useState('');
    const [text4,setText4]=useState('');
    const [text5,setText5]=useState('');
    const { dispatch }=useContext(MyContext);
    const changeTextHandler=(e:React.ChangeEvent) =>{
        //这个e后面不加就会e这报错
        //因为e的类型不确定
        //加了后下面报错
        //因为不是所有html元素都有value属性所以要断言是表单元素
//         console.log(e.type)
//         switch(e){
//      case text:
// setText((e.target as HTMLInputElement).value);
// break;
//         case 'text1':
    setText((e.target as HTMLInputElement).value);       
// }
    }
    const changeTextHandler1=(e:React.ChangeEvent)=>{
        setText1((e.target as HTMLInputElement).value);     
    }
    const changeTextHandler2=(e:React.ChangeEvent)=>{
        setText2((e.target as HTMLInputElement).value);     
    }
     const changeTextHandler3=(e:React.ChangeEvent)=>{
        setText3((e.target as HTMLInputElement).value);     
    } 
    const changeTextHandler4=(e:React.ChangeEvent)=>{
        setText4((e.target as HTMLInputElement).value);     
    } 
    const changeTextHandler5=(e:React.ChangeEvent)=>{
        setText5((e.target as HTMLInputElement).value);     
    }
const [Count,setCount]=useState(1);
const CountAdd=()=>{
    setCount(Count=>Count+1)
    }
const addTodohandler=()=>{

if(text.trim()===''||text.trim()==='')
{
    alert('待办事项不能为空!');
    return;
}
dispatch({
 type:'ADD',
 todo:{  
    id:Count,
    text:text,
    isFinished:false,
    text1:text1,
    text2:text2,
    text3:text3, 
    text4:text4,
    text5:text5,
}}

)
setText('');
setText1('');
setText2('');
setText3('');
setText4('');
setText5('');
{CountAdd()}
}
    return (
        <div className="todo-input">
        <p><input type="text" placeholder="请输入代办事项"onChange={changeTextHandler} value={text}/>
            <span><button onClick={addTodohandler}>添加</button></span>
        截止日期:<input type="text1" style={inputstyle} placeholder={moment(new Date()).format('YYYY')} onChange={changeTextHandler1} value={text1}/>
            年
            <input type="text2" style={inputstyle} placeholder={moment(new Date()).format('MM')} onChange={changeTextHandler2} value={text2}/>
            月
            <input type="text3"style={inputstyle} placeholder={moment(new Date()).format('DD')} onChange={changeTextHandler3} value={text3}/>
            日
            <input type="text4"style={inputstyle} placeholder={moment(new Date()).format('hh')} onChange={changeTextHandler4} value={text4}/>
            时
            <input type="text5" style={inputstyle} placeholder={moment(new Date()).format('mm')} onChange={changeTextHandler5} value={text5}/>
            分
            </p>
        </div>
    )
}
export default TodoInput;