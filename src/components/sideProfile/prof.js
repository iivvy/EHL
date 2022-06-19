import React ,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { userRows } from '../../datatablesource';
import {AiOutlineMail} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import './prof.css'

const Prof= ({id,img,username,name,promotion,adresse,datedenaissance,groupe,sexe}) => {
    
   
        return(
            <div className='contt'>
                <div className='id'>
                   id {id}
                </div>
                <div className='userimg'>
                <img src={img} alt={username}/>
                </div>
                <div className='info'>
                    <div className='name'>
                       user {username}
                    </div>
                    <div className='promo'>
                        <p>{promotion} student</p>
                    </div>
                    <div className='contact'>
                        <div className='message'>
                            <BsChatDots/>
                        </div>
                        <div className='mail'>
                            <AiOutlineMail/>
                        </div>
                    </div>
                    
                    <div className='lieu'>
                        <p>{adresse}</p>
                    </div>
                    <div className='date'>
                        <p>{datedenaissance}</p>
                    </div>
                    <div className='groupe'>
                        <p>{groupe}</p>
                    </div>
                    <div className='sexe'>
                        <p>{sexe}</p>
                    </div>
                    <div className='adresse'>
                        <p>{}</p>
                    </div>
                    
                </div>
                
                
            </div>
        )

    
   
  
}

export default Prof;