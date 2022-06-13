import React, { useContext, useEffect, useState } from 'react'
import avatar from './avatar.svg'
import './NavBar.css'
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import {BsChatDots} from 'react-icons/bs'
import {HiOutlineDatabase} from 'react-icons/hi'
import {VscNotebook} from 'react-icons/vsc'
import {MdLogout} from 'react-icons/md'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Testname from './Testname';
import { render } from '@testing-library/react';



const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  
  


  return (

    
    <div className='sidenav'>
      <div className='avatar'>
        <img src={avatar} alt='avatar' className='avatar' />
        <div className='user-info'>
        
          <h5 >{user.username}</h5>
          
          <p>{user.role}</p>
        </div>
        </div>
       
       <ul>
            <li>
                <a href='/admin/Promotion'> <AiFillDatabase style={{}}/>Module</a>
            </li>
        </ul> 
        
        <ul>
        
            <li>
   
              <a href='/admin/StudentDB'><HiOutlineDatabase style={{color: 'white'}}/> Base de Donnée</a>
            </li>
           
        </ul> 
        
        <ul>
            <li>
                <a href='/admin/TimeTable'><AiOutlineSchedule style={{color: 'white'}}/>Emploi du Temps</a>
            </li>
        </ul> 
        <ul>
            <li>
                <a href='/admin/Chat'> <BsChatDots style={{color: 'white'}} />Messagerie</a>
            </li>
        </ul> 
        <ul>
            <li>
                <a href='/evaluation'> <VscNotebook style={{color: 'white'}} />Evaluation</a>
            </li>
        </ul> 
        <MdLogout/>
    </div>
  )
}
export default NavBar;