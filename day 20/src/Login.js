import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import the CSS file
import { BrowserRouter, Routes, Route, Redirect, Link, useNavigate } from 'react-router-dom';
import NavBar from './layout/NavBar';
import { useDispatch } from "react-redux";
import { login } from './Redux/userSlice';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch =useDispatch();
  const nav= useNavigate();




const handleLogin = async () => {
  // You can add your advanced login logic here
  if (!username || !password) {
    setError('Username and password are required.');
  } else if (password.length < 8) {
    setError('Password must be at least 8 characters long.');
  } else {
    const logindetails = { username, password };
    
    try {
      const response = await axios.post("http://localhost:8080/auth/authenticate", logindetails);
      
      
      if (response.status === 200) {
        // Store the authentication token in local storage
        localStorage.setItem('authToken', response.data.token);
        
        // Perform your login logic here
        dispatch(login(username));
        nav("/NavBar");
        
        console.log('Username:', username);
        console.log('Password:', password);
      } else {
        // Handle login failure
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle other errors (e.g., network error)
      setError('An error occurred during login.');
      console.error(error);
    }
  }
};

 
  

  return (
    <div className='Logo'>
    <div className="login-containers">
    
      <h2>LOGIN</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" type="button" onClick={handleLogin}>
        Login
        </button>
        <div className='p3'>
        <p>Don't have an account?<div className='p2'><Link to="/register">Register</Link></div></p></div>
      </form>
    </div>
    </div>
  );
}

export default Login;