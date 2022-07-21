import App7 from "../App7";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import NOMatch from "../pages/NOMatch";
//引入路由组件
//BrowserRouter相当于router中history模式，可以让url不带#
//HashRouter相当于hash模式，带#
import{BrowserRouter,Routes,Route} from  "react-router-dom";
//所有Router必须包在Routers中
const MyRouter=()=>{
    return (
<BrowserRouter>
<Routes>
<Route path='/' element={<App7/>}>
<Route index element={<Home/>}></Route>
<Route path='list/:id' element={<List/>}></Route>
<Route path='list' element={<List/>}></Route>
<Route path='detail' element={<Detail/>}></Route>
</Route>
<Route path='*' element={<NOMatch/>}></Route>

</Routes>
</BrowserRouter>
    )
}
export default MyRouter