import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import AuctionPage from './Components/AuctionPage'
import Dashboard from './Components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><LandingPage /></>
    },
    {
      path: "/dashboard",
      // protect route
      element: <><Navbar /> {<ProtectedRoute><Dashboard /></ProtectedRoute>} </>
    },
    {
      // protect route
      path: "/auctionPage",
      element: <><Navbar /> {<ProtectedRoute><AuctionPage /></ProtectedRoute>} </>
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
