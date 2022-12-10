import React from 'react'
import './Profile.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="profile-form-container">
            <form action="" className='profile-form'>
                <h1 style={{textAlign:'center'}}>Profile</h1>
                <div className="profile-img-container">
                    <img src="./images/profile.jpg" alt="alterna" />
                    <label htmlFor="profile-pic" className='add-profile'><AiOutlinePlusCircle/></label>
                    <input type="file" name="" id="profile-pic" style={{display:'none',visibility:'none',cursor:'pointer'}} />
                </div>
                <br />
                <br />
                <div className='input-wrapper'>
                <label htmlFor="">Full Name:</label>
                <input className='profile-input' type="text" name="" id="" />

                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Phone Number:</label>
                <input className='profile-input' type="phone" name="" id="" />
                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Email Adress:</label>
                <input className='profile-input' type="email" name="" id="" />
                </div>
                <div className='input-wrapper'>
                <label htmlFor="">Bio :</label>
                <input className='profile-input' type="text" name="" id="" />
                </div>
                 <br />
                <button className='profile-btn' type='submit'>Update Profile</button>
                
                
            </form>
        </div>
    </div>
  )
}

export default Profile