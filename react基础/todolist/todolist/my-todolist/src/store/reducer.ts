
export interface StateProps{
        id:number;
        text:string;
        isFinished:boolean;
        text1:string;
        text2:string;
        text3:string;
        text4:string;
        text5:string;
}
export interface ActionProps{
    type:string;
    [key:string]:any;
}

const reducer=(state:StateProps[],action:ActionProps) =>{
switch(action.type){
    case'ADD':
    return [...state,action.todo]

    case'CHANGEFINSISHED':
    return state.map(item =>{
    if(item.id===action.id){
        console.log(action.id)
        return Object.assign({},item,{
            isFinished:!item.isFinished
        })
    }
    return item;
})

case 'DELETE':
console.log(action.id)
return state.map(item =>{
if(item.id===action.id){
    console.log(action.id)
    return Object.assign({},item,{
        isFinished:!item.isFinished
    })
}
return item;
})
 
    default:
        return state;
}
}
export default reducer;