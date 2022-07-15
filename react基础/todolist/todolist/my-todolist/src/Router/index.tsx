import App from "../App";
import Detail from "../page/Detail";
import Login from "../page/Login";
//引入路由组件
//BrowserRouter相当于router中history模式，可以让url不带#
//HashRouter相当于hash模式，带#
import{BrowserRouter,Routes,Route} from  "react-router-dom";

//所有Router必须包在Routers中
const MyRouter=()=>{
    return (
<BrowserRouter>
<Routes>
<Route path='/' element={<App/>}></Route>

<Route path='detail' element={<Detail/>}></Route>
<Route path='login'element={<Login/>}></Route>
</Routes>
</BrowserRouter>
    )
}
export default MyRouter