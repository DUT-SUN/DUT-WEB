import React,{useContext} from "react";
import{MyContext}from "./MyProvider"
import {StateProps} from "../store/reducer"
interface Iporps{
    todo:StateProps
    }
const Delete=({todo}:Iporps)=>{ 

    const {dispatch}=useContext(MyContext)
    const changedelete=()=>{ 
        dispatch({
            type:'DELETE',
            id:todo.id
        });
    }
}
export default Delete;