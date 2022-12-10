import React from 'react'
import'./Post.css'
import {FiBookmark} from 'react-icons/fi'
import {MdComment} from 'react-icons/md'
import {HiOutlineHeart} from 'react-icons/hi'
const Post = () => {
  return (
    <div className='post-container'>
        <div className="img-container">
            <img src="./images/post1.jpg" alt="" />
        </div>
        <div className="post-content">
            <p csl>Lorem ips repudiandae quos et. Lorem ips repudiandae quos et. DoLorem ips repudiandae quos et. DoLorem ips repudiandae quos et. DoDolorem repellat iusto, architecto cum quam harum fugit ex quos perspiciatis ratione quo laborum?</p>
        </div>
        <div className="post-btns">
            <ul>
                <li><HiOutlineHeart/></li>
                <li><MdComment/></li>
                <li><FiBookmark/></li>
            </ul>
        </div>
    </div>
  )
}

export default Post