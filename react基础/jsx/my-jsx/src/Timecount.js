import React from "react";
import './index.css'
// const list=(
//   <h1 className='title' style={{color:'green',background:'skyblue'}}>学习中</h1>
// )
class Timecount extends React.Component {
    
    state={
        count:0
    }
    handleClick1=()=>{
this.setState({count:this.state.count+1})}
handleClick2=()=>{
    this.setState({count:this.state.count-1})
}
    
    render(){
    return (
    <div><h2 color="black">计数器:{this.state.count}</h2>
    <button  className='btn'onClick={this.handleClick1}>+1</button>
    <button className='btn'  onClick={this.handleClick2}>-1</button>
</div>
    )}
}
export default Timecount