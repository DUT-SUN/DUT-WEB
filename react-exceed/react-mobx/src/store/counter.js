//第一个mobx小案例
import {makeAutoObservable}from 'mobx'
class CounterStore{
    //1.定义数据
    count=0;
    list=[1,2,3,4,5,6]
    constructor(){
        //把数据搞成响应式
makeAutoObservable(this)
    }
    //定义计算属性
    get filterList(){
        return this.list.filter(item=>item>2)
    }
    addList=()=>{
        this.list.push(7,8,9)
       }
    //定义修改数据的方法
    addCount=()=>{
        this.count++;
    }
}
export {CounterStore}