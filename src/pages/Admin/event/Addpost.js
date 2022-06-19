import { imageListClasses } from '@mui/material';
import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import Home from '../../Base/Home';
import './post.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Post(){
  var loadFile = function(event){
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
  }
  
  const [Title,setTitle] = useState('');
  const [Texte,setTexte] = useState('');
  const [EvenementPhoto,setEvenementPhoto] = useState('');
  const [Date,setDate] =useState('');
  const user = JSON.parse(localStorage.getItem("user"));


  const AddPost = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image',EvenementPhoto);
    try{
      console.log("dcwcjwd",user.id)
     const response = axios.post(`http://localhost:8080/creerevenement`,
     {titre:Title,text:Texte,EvenementPhoto:formData,date:Date,id:user.id},
      {headers: {'Content-Type': "multipart/form-data"}})
     console.log(response)
    } catch(error){
      console.log(error)

    }
    
  }
  const handleChange = (event) => {
    setEvenementPhoto(event.target.files[0]);
  }
  // useEffect(() => {
  //   AddPost();
 
  // }, [])
  
    return (
        <div>
            <Home/>
        <div className='write'>
          <img className='writeimg' id="output" onChange={handleChange}/>
          {/* <img className='writeimg' src='https://clickysoft.com/wp-content/uploads/2021/10/How-To-Integrate-Node-JS-With-React-Clickysoft-1.jpg'></img> */}
            <form className='writeform' >
                <div className='write-inputs'>
                    <label htmlFor='fileinput'>
                    <BsPlusLg className="plus" style={{color:"black"}}/>
                    </label>
                    <input id='fileinput' accept="image/*" type='file' style={{display:"none"}}  onChange={loadFile}>
                    
                    </input>
                   
                    

                    <input type='text' placeholder='Titre' className='writeinput' onChange={(e)=>{setTitle(e.target.value)}} autoFocus={true}/>
                    <input type='date' placeholder='date' onChange={(e)=>{setDate(e.target.value)}}></input>
                </div>
                <div className=' write-inputs'>
                    <textarea placeholder='What do you want to publish ?' 
                    type="text" className='writeinput writetext' onChange={(e)=>{setTexte(e.target.value)}}></textarea></div>
                    <button className='writesubmit' onClick={AddPost}> Publier</button> 
            </form>
        
        </div>
        </div>
    )
}