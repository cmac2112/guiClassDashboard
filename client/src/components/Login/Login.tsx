import React from 'react'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const Navigate = useNavigate();
  return (
    <div>
    <div className='login-container'>
        <h1 className='header'>Login/Register</h1>
        <button onClick={() => Navigate('/dashboard/')} className="search-button">
            Log in as Guest
          </button>
    </div>
    <Footer />
    </div>
  )
}

export default Login