import React,{createContext,useReducer} from "react";
import reducer ,{StateProps,ActionProps}from "../store/reducer"
// import{StateProps}from "../store/reducer"
//如果想要引2个从相同的组件
//为什么要添加这个组件:
//为了不用将props一层一层的传
//过程:通过createContext创建context对象出来
//然后给定对象的一些属性和值
//通过MyContext.Provider这个组件将其他组件写在他们之间
//通过这样的方式，使所有子组件拿到这个值
//只不过在拿值的时候，需要引用hooks的useContext来简化操作
//比如const {addTodo}=useContext(MyContext)引用并解构

    export interface ContextProps{
state:StateProps[];
dispatch:React.Dispatch<ActionProps>;
    }
    
    // const MyContext =createContext<ContextProps | null>(null)
    //如果刚开始不写<ContextProps | null>会报错，因为MyContext的泛型是null，于是需要添加<ContextProps>
    //但是还会报错，因为null没有上方这种结构只是一个初始值，所以改成<ContextProps | null>
    //但是这样虽然没报错了，但是后续用的时候需要对值要进行一些判断
    export const MyContext =createContext({}as ContextProps);
//一不注释就忘：创建MyContext，初始值设为{}as ContextProps

//这是进行的一个断言，初始值是空对象断言成ContextProps这种形式
const MyProvider=(props:React.PropsWithChildren<{}>)=>{
    const initState:StateProps[]=[];
    const[state,dispatch]=useReducer(reducer,initState);

//     const[todoList,setTodolist]=useState<StateProps[]>([]);
//     //上面这行代码如果的数组不能写成空，因为后续展开添加的时候，默认被认为是never类型
//     //加上<StateProps[]>限定出结构
//     const changeTodo=(id:number)=>{
// const newTodoList=todoList.map(item =>{
//     if(item.id==id)
//     {return Object.assign({},item,{isFinished:!item.isFinished})};
// return item;
// });
// setTodolist(newTodoList)
//     }
//     const addTodo =(todo:StateProps)=>{
//     setTodolist([...todoList,todo]);
//     }
    //这个props是为了接收插过来的组件
    //从而进行限制
    //只写props会报错需要对props进行限制声明然后通过内置的React.PropsWithChildren进行限制
    //只写这个还会报错，报错为缺少泛型所以添加了一个空对象
    //这个是其实是泛型和children的合集
    return(
        <MyContext.Provider value={{state,dispatch}}>    
        {props.children}
        </MyContext.Provider>
    )
}
//这个原来放到value的：todoList,changeTodo,addTodo
 //添加上面这句{props.children}是为了提供插槽//添加上面这句是为了提供插槽
 //这个value后面的花括号报错只能为 JSX 属性分配非空“表达式”
export default MyProvider;
