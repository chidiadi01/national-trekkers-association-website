import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Legacies from './components/Legacies/Legacies.jsx'
import Activities from './components/Activities/Activities.jsx'
import Membership from './components/Membership/Membership.jsx'
import Login from './components/Login/Login.jsx'
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
  },
  {
    path:"/legacies",
    element: <Legacies/>
  },
  {
    path:"/membership",
    element: <Membership/>
  },
  {
    path:"/login",
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
