// Entry point của ứng dụng React
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Render ứng dụng vào DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

