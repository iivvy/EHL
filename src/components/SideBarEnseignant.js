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
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    window.open('/','_self')
  }

  return (
   
    <div className='sidenav'>
     <div className='avatar'>
      <img src={avatar} alt='avatar' className='avatar' />
      <div className='user-info'>
        <h5>{user.username}</h5>
        <p>{user.role}</p>
      </div>
      </div>
     
     <ul>
          <li>
              <a href='/Enseignant/Document'> <GiBookshelf style={{}}/> Documents</a>
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
              <a href='/Enseignant/Evaluation'><AiOutlineSchedule style={{color: 'white'}}/>Evaluation</a>
          </li>
      </ul> 
      <ul>
          <li>
              <a href='/'> <BsChatDots style={{color: 'white'}} />Messagerie</a>
          </li>
      </ul> 
     
      <button style={{border:"none",width:"70px",height:"40px",borderRadius:"10px",backgroundColor:"white",marginLeft:"50px"}}>
         <MdLogout onClick={logout} 
        style={{color:"#0A1F31",width:"30px",height:"20px"}}/>
         </button>
      </div>
  )
}

export default SideBarEnseignant