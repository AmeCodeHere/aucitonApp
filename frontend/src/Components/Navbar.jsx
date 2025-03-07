import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <div className='container'>

            <div className='nav-logo'>
                <p className='p1'>
                    A
                </p>
                <div>

                    <span className='s1'>Auction</span>
                    <span className='s2'>Here</span>
                </div>
            </div>

            <div className="contains-items">
                <div className='user'>
                    <Link className='link' to="/"  ><p>Home</p></Link>
                    <Link className='link' to="/dashboard"  ><p>Dashboard</p></Link>
                    <Link className='link' to="/auctionPage">  <p>Add Auction</p></Link>
                </div>
                <div className="btns">
                    <Link to='/login'><button className='btn1'><p>Log in</p></button></Link>
                    <Link to='/signup'><button className='btn2'>Get started for free</button></Link>
                </div>
            </div>
            {/* <div className='left-items'>
                  <Link className='link' to="/">  <span>Dashboard</span></Link> 
                  <Link className='link' to="/auctionPage">  <span>Post Auction</span></Link> 
                 
                </div>
                <div className='centerTitle'>
                    <span className='appTitle'>Auction App</span>

                </div>


                <div className='right-items'>
                <Link className='link' to="/login">  <span>Login</span></Link> 
                <Link className='link' to="/signup">  <span>SignUp</span></Link> 
           
                </div> */}


        </div>

    )
}

export default Navbar
