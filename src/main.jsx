import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HotelsProvider } from './context/HotelsProvider.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HotelsProvider>
       <App />
    </HotelsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)