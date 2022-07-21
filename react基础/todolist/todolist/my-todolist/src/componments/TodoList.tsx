import React,{useContext} from "react";
import TodoItem from "./TodoItem";
import {MyContext}from "./MyProvider";
const style={
    marginTop:'20px'
}
const TodoList=() =>{
    const {state}=useContext(MyContext)
    //解构
    const todolistdom=state.map(item=><TodoItem key={item.id} todo={item} />)
    return (
        <div className="todo-list" style={style}>
            {todolistdom}
            
        </div>
    )
}
export default TodoList;