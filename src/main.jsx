
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
// import { App } from './HelloWorldApp'
// import App from './HelloWorldApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola Mundo' subTitle={123} />
    </React.StrictMode>
)