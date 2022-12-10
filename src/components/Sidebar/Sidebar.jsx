import React from 'react'
import './Sidebar.css'
import {FaSearch} from 'react-icons/fa'
import {ImHome} from 'react-icons/im'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessage} from 'react-icons/bi'
import {FiBookmark} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile,CgMoreO} from 'react-icons/cg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="menu">
        <ul>
          <div className="link-container">
             <p><ImHome/></p>          
            <li> Home</li>
           
          </div>
          <div className="link-container">
             <p><IoMdNotificationsOutline/></p>          
            <li> Notifications</li>
           
          </div>

          <div className="link-container">
             <p><BiMessage/></p>          
            <li> Messages</li>
           
          </div>
          <div className="link-container">
             <p><FiBookmark/></p>          
            <li> Bookmarks</li>
           
          </div>
          <div className="link-container">
             <p><CgProfile/></p>          
            <li> Profile</li>
           
          </div>

          <div className="link-container">
             <p><CgMoreO/></p>          
            <li> More </li>
           
          </div>
          <br />
          <br />

          <div className="link-container">
             <p><FiLogOut/></p>          
            <li> Logout </li>
           
          </div>
             
          
        </ul>
       </div>
    </div>
  )
}

export default Sidebar