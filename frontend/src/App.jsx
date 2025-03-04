import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import AuctionPage from './Components/AuctionPage'
import Dashboard from './Components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: "/auctionPage",
      element: <><Navbar /><AuctionPage /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><SignUp /></>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
