import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/cadastro', element: <Cadastro/>}
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
