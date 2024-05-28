import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Activities from './components/Activities/Activities.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/activities",
    element: <Activities/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
