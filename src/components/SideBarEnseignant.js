import React from 'react'
import avatar from './avatar.svg'
import './NavBar.css'
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import {BsChatDots} from 'react-icons/bs'
import {HiOutlineDatabase} from 'react-icons/hi'
import {VscNotebook} from 'react-icons/vsc'
import {MdLogout} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'

const SideBarEnseignant = () => {
  return (
   
    <div className='sidenav'>
     <div className='avatar'>
      <img src={avatar} alt='avatar' className='avatar' />
      <div className='user-info'>
        <h5>Hadjer</h5>
        <p>Administrateur</p>
      </div>
      </div>
     
     <ul>
          <li>
              <a href='/'> <GiBookshelf style={{}}/>Mes Cours</a>
          </li>
      </ul> 
      <ul>
          <li>
              
            <a href='/'><AiOutlineSchedule style={{color: 'white'}}/> Emploi du Temps</a>
            {/* <link to='/pages/database'></link> */}
            
            
          </li>
      </ul> 
      <ul>
          <li>
              <a href='/'><AiOutlineSchedule style={{color: 'white'}}/>Evaluation</a>
          </li>
      </ul> 
      <ul>
          <li>
              <a href='/'> <BsChatDots style={{color: 'white'}} />Messagerie</a>
          </li>
      </ul> 
     
      <MdLogout/></div>
  )
}

export default SideBarEnseignant