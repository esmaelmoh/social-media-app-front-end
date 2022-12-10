import React from 'react'
import './Rightsidebar.css'
const Rightsidebar = () => {
  return (
    <div className='right-sidebar'>
       <div className="menu-right">
        <ul>
          <div className="link-container-right">
            <button> Following...</button>           
          </div>  
          <br />
          <div className="link-container-right"> 
            <img src="./images/profile.jpg" alt="" />       
            <li> Esmael </li>   
          </div>       
          <div className="link-container-right"> 
            <img src="./images/profile2.jpg" alt="" />       
            <li> Amdebrihan </li>   
          </div>       
          <div className="link-container-right"> 
            <img src="./images/profile3.jpg" alt="" />       
            <li> Dagim </li>   
          </div>       
          <div className="link-container-right"> 
            <img src="./images/profile4.jpg" alt="" />       
            <li> Henok </li>   
          </div>       
        </ul>
       </div>
    </div>
  )
}

export default Rightsidebar