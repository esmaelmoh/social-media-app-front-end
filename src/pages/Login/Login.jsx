import React from 'react'
import './Login.css'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-form-container">
            <form action="" className='login-form'>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <br />
                <br />
                <div className='input-wrapper'>
                <label htmlFor="">Full Name:</label>
                <input className='login-input' type="text" name="" placeholder='Esmael Mohammed' id="" />

                </div>
                {/* <div className='input-wrapper'>
                <label htmlFor="">Phone Number:</label>
                <input className='login-input' type="phone" name="" id="" />
                </div> */}
                <div className='input-wrapper'>
                <label htmlFor="">Email Adress:</label>
                <input className='login-input' type="email" name="" placeholder='esmaelmoh664@gmail.com' id="" />
                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Password:</label>
                <input className='login-input' type='password' placeholder='.................'  name="" id="" />
                </div>
                 <br />
                <button className='login-btn' type='submit'>Login</button>
                <p style={{textAlign:'center',color:'grey'}}>Don't have an account? <span style={{color:'rgb(118, 155, 135)'}}> Sign Up</span></p>
                <div className="line">

                </div>
                <button className='login-btn'> <span className='google'><FcGoogle className='google-icon'/></span>Sign In With Google</button>
            </form>
        </div>
    </div>
  )
}

export default Login