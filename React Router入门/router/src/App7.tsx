import React from 'react';
import{Link,Outlet} from 'react-router-dom'
export default function App7() {
    return (
<div>
    <ul> 
        <li> <Link to={'./'}>首页</Link> </li>
        <li>  <Link to={'./list'} >列表页(不带id)</Link> </li>
        <li>  <Link to={'./list/456'} >列表页(带id)</Link> </li>
        <li>  <Link to={'./detail?id=123'}>详情页</Link> </li>
    </ul>

    <Outlet/>
</div>
    )
}

