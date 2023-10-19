import React from 'react'

import ReactDom from "react-dom/client";
import { HelloWordApp } from './HelloWord';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import { CounterAppDos } from './CounterApp2';
// import {App} from '.
// import './style.css'


ReactDom.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
        {/* <HelloWordApp /> */}
        {/* <FirstApp/> */}
        {/* <CounterApp value={12}/> */}
        <CounterAppDos value={0} />
    </React.StrictMode>
)
