
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
// import { App } from './HelloWorldApp'
// import App from './HelloWorldApp'
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Titulo' subTitle={123} /> */}
        <CounterApp value={10} />
    </React.StrictMode>
)