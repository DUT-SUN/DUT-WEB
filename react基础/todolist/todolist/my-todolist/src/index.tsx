import React from 'react';
import App from './App';
import MyRouter from './Router'
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);

root.render(
    <MyRouter/>
);