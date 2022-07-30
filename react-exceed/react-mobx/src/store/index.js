//组合子模块
//封装统一的供业务使用的方法
import {ListStore} from './List.Store'
import {CounterStore}from './counter'
import React from 'react'
class RootStore{
    constructor(){
this.counterStore=new CounterStore();
this.listStore=new ListStore(); 
    }
}
const rootStore = new RootStore()
//核心目的 统一方法封装 ，这样所有组件都用这个方法
const context=React.createContext(rootStore)
const useStore=() =>React.useContext(context)
export {useStore}