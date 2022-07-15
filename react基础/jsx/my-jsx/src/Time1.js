import React from "react";
class Time1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:new Date()
        };
    }

componentDidMount() {
    this.timerID=setInterval(
        () =>this.tick()
        ,1000);   
}
componentWillUnmount() {
clearInterval(this.timerID);
}
tick(){
this.setState({date:new Date()});
}
render(){
    return <div><h2>实时时间:{this.state.date.toLocaleTimeString()}</h2></div>
}
}
export default Time1