import{makeAutoObservable}from 'mobx'
class ListStore{
    list=['react','mobx'];
    constructor(){
        makeAutoObservable(this)
    }
    addList=()=>{
        this.list.push('angular')
    }
}

export {ListStore}