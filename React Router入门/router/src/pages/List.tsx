import React from 'react';
import {useParams}from 'react-router-dom'
export default function List() { 
    const {id}=useParams();
    return(
        <div>
            <h2>
                列表页{id}
            </h2>
        </div>
    )

}