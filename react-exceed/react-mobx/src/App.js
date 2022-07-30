//导入实例
// import { counterStore } from "./store/counter";
//导入中间件
import {observer}from 'mobx-react-lite'
import {useStore} from './store/index'
function App() {
  const rootStore=useStore()
  const {counterStore} =useStore()

  return (
    <div className="App">
  {counterStore.count}
  <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

export default observer(App);
// /*  {/* 渲染count */}
//  {counterStore.count}
//  {counterStore.filterList.join('-')}


//  {/* 点击事件触发action函数修改count值 */}
//  <button onClick={counterStore.addCount}>+</button>
//  <button onClick={counterStore.addList}>修改数组</button> */