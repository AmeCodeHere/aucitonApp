import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    alert('Form submitted:', formData);
  };


  return (
    <div className="signUp-container">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
   
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange}
              required
            />
          </div>


          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleChange}
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
