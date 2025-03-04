import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <div className='container'>

            <div className='nav-items'>

                <div className='left-items'>
                  <Link className='link' to="/">  <span>Dashboard</span></Link> 
                  <Link className='link' to="/auctionPage">  <span>Post Auction</span></Link> 
                 
                </div>
                <div className='centerTitle'>
                    <span className='appTitle'>Auction App</span>

                </div>


                <div className='right-items'>
                <Link className='link' to="/login">  <span>Login</span></Link> 
                <Link className='link' to="/signup">  <span>SignUp</span></Link> 
           
                </div>

            </div>
        </div>

    )
}

export default Navbar
