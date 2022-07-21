import React from 'react';
import {useLocation} from 'react-router-dom'
interface ILocation{
    hash:String;
    key:String;
    pathname:String;
    search:String;
    state:any;
}
export default function Home() { 

    let location:ILocation=useLocation()
    //可在location后加any
   
    return(
        <div>
            <h2>
                主页{location.state ?location.state.id:0}
            </h2>
        </div>
    )

}