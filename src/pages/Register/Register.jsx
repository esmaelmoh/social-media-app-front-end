import React from 'react'
import './Register.css'
import {FcGoogle} from 'react-icons/fc'
const Register = () => {
  return (
    <div className='register-container'>
        <div className="register-form-container">
            <form action="" className='register-form'>
                <h1 style={{textAlign:'center'}}>Register</h1>
                <br />
                <br />
                <div className='input-wrapper'>
                <label htmlFor="">Full Name:</label>
                <input className='register-input' type="text" name="" id="" />

                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Phone Number:</label>
                <input className='register-input' type="phone" name="" id="" />
                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Email Adress:</label>
                <input className='register-input' type="email" name="" id="" />
                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Password:</label>
                <input className='register-input' type="password" name="" id="" />
                </div>
                 <br />
                <button className='register-btn' type='submit'>Register</button>
                <p style={{textAlign:'center',color:'grey'}}>Already have an account? <span style={{color:'rgb(118, 155, 135)'}}> Login</span></p>
                <div className="line">

                </div>
                <button className='register-btn'> <span className='google'><FcGoogle className='google-icon'/></span>Sign Up With Google</button>
            </form>
        </div>
    </div>
  )
}

export default Register