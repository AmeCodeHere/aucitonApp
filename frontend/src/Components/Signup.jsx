import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/save", { ...formData, id: uuidv4() })
      if (response) {
        console.log(response.data)
        navigate('/login')
      }

      setFormData({
        username: '',
        email: '',
        password: ''
      })
    } catch (err) {
      console.error("error in signup", err)

    }

  };


  return (
    <div className="signUp-container">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>



          <button type="submit" className="sign-button">
            Sign Up
          </button>
        </form>


        <p className="login-link">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
