import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {

  const [userData, setuserData] = useState({ email: "", password: "" })
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()

  const handeData = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const loginUser = await axios.post("http://localhost:3000/login", userData)
      if (loginUser.data === "Successfully logined!!") {
        navigate('/')

        setuserData({ email: "", password: "" })

      } else {
        alert("password or username is incorrect!! ")
      }
    } catch (err) {
      console.error(err)
    }

    // console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={userData.email}
                name="email"
                onChange={handeData}
                required
              />
            </div>


            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={userData.password}
                name="password"
                onChange={handeData}
                required
              />
            </div>


            <div className="options">
              <label >
                <input className="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>


            <button type="submit" className="login-button">
              Login
            </button>
          </form>


          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
