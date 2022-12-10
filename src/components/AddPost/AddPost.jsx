import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './AddPost.css'
const AddPost = () => {
  return (
    <div className='addpost-container'>
       
        <form action="" className='add-post-form'>
            {/* <h2>Home</h2> */}
            <textarea name="" id="" ></textarea>
            <div>
                <div className='image-uploader-container'>
                    <label htmlFor="image-file" className='add-image'><AiOutlinePlusCircle/></label>
                    <p>upload image</p>
                </div>
                <input type="file" name="" id="image-file" style={{display:'none',visibility:'none',cursor:'pointer'}}/>
            </div>
            <button type="submit" className='add-post-btn'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost