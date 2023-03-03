import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import "./Login.css"
import { Link } from 'react-router-dom';


const Login = () => {
  const [close, setClose] = useState(false);

  return (
  <div className='container'>
   
    <div className="wrapperr" >
      <div className="icon-exit">
        <CloseIcon/>
      </div>
      <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className='icon'><EmailIcon/></span>
            <input type="email" required />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-box">
            <span className='icon'><LockIcon/></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type='submit' className='btn'>Login</button>
          <div className="login-register">
            <p>Don't have an account? <a href="#" className='register-link'><Link to="/register">Register</Link></a></p>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Login