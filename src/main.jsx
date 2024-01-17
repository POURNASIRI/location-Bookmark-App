import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HotelsProvider } from './context/HotelsProvider.jsx'
import { BookmarksProvider } from './context/BookmarksProvider.jsx'
import { SidebarProvider } from './context/SidebarProvider.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelsProvider>
        <BookmarksProvider>
          <SidebarProvider>
             <App />
          </SidebarProvider>
        </BookmarksProvider>
      </HotelsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
