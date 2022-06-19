import React from 'react'
import Home from '../../Base/Home'
import './postcard.css'

const PostCard = ({title,image,date}) => {
  return (
    <div>
     
        
            <div className='postCard'>
                <div className='postimage'>
                    <img src={image}></img>

                </div>
                <div className='info'>
                  <p className='posttitle'>{title}</p>
                  <div className='postdate'>
                    <p className='postday'>Publié le: {date}</p>
                 

                  </div>  
                </div>
            
           
        </div>
    </div>
  )
}

export default PostCard