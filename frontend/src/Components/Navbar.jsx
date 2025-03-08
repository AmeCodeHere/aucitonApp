import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment,multiply } from '..counter/counterSlice'



const Navbar = () => {
    const count = useSelector(state => state.counter.value)
    
    const [token, settoken] = useState('')

    const navigate = useNavigate()
    const [showDropDown, setshowDropDown] = useState(false)

    const toggleDrop = () => {
        setshowDropDown(!showDropDown)
    }
    const clear = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        settoken('')
        navigate('/login')
    }

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = localStorage.getItem("token");
                settoken(token || '');
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        getToken();
    }, [count]);



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
                    {token ?
                        (<div onClick={toggleDrop}>
                            <lord-icon className="userProile"
                                src="https://cdn.lordicon.com/kdduutaw.json"
                                trigger="hover"
                                colors="primary:#55fbac,secondary:#ffffff"
                            >
                            </lord-icon>
                            {showDropDown && (<div className='show-details'>
                                <div className="logout">
                                    <button className='btn1' onClick={clear}> Logout</button>
                                </div>
                            </div>)}

                        </div>)
                        :
                        (<div className='btns'>
                            <Link to='/login'><button className='btn1'><p>Log in</p></button></Link>
                            <Link to='/signup'><button className='btn2'>Get started for free</button></Link>
                        </div>)
                    }


                </div>
            </div>

        </div>

    )
}

export default Navbar
