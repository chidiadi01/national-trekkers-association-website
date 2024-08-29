import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Legacies from './components/Legacies/Legacies.jsx'
import Activities from './components/Activities/Activities.jsx'
import Membership from './components/Membership/Membership.jsx'
import Login from './components/Login/Login.jsx'
import './index.css'
import Fourofour from './components/Fourofour/404.jsx'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Fourofour/>
  },
  {
    path:"/activities",
    element: <Activities/>,
    errorElement: <Fourofour/>
  },
  {
    path:"/legacies",
    element: <Legacies/>,
    errorElement: <Fourofour/>
  },
  {
    path:"/membership",
    element: <Membership/>,
    errorElement: <Fourofour/>
  },
  {
    path:"/login",
    element: <Login/>,
    errorElement: <Fourofour/>
  },
  {
    path:"*",
    element: <Fourofour/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
