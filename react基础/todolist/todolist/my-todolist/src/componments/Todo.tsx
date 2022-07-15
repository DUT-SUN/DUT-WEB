import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import MyProvider from "./MyProvider"
const Todo=()=>{
    return (
        <MyProvider>
    <div className="todo">
            <TodoInput/>
            <TodoList/>
        </div>
        </MyProvider>
    )
     //这个上面标签会报错，因为MyProvider组件中没有插槽
}
export default Todo;