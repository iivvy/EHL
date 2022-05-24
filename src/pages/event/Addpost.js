import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import './post.css'

export default function Post(){
    return (
        <div className='write'>
            <img className='writeimg' src='https://clickysoft.com/wp-content/uploads/2021/10/How-To-Integrate-Node-JS-With-React-Clickysoft-1.jpg'></img>
            <form className='writeform' >
                <div className='write-inputs'>
                    <label htmlFor='fileinput'>
                    <BsPlusLg className="plus" style={{color:"black"}}/>
                    </label>
                    <input type='file' id='fileinput' style={{display:"none"}}></input>
                    <input type='text' placeholder='Title' className='writeinput' autoFocus={true}/>
                </div>
                <div className=' write-inputs'>
                    <textarea placeholder='What do you want to publish ?' 
                    type="text" className='writeinput writetext'></textarea></div>
                    <button className='writesubmit'> Publish</button> 
            </form>
        
        </div>
    )
}