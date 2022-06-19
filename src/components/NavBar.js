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
import {BiNews} from 'react-icons/bi'
import { render } from '@testing-library/react';



const NavBar = () => {
  const [ListPromoEmploi,setListPromoEmploi]=useState([])
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    window.open('/','_self')
  }

  
  const PromolistEmploi=()=>{
    axios.post(`http://localhost:8080/GestionDesAnnes/getPromos`,{
      AnneeNom:"2021/2022",
    })
    .then((response)=>{
      setListPromoEmploi(response.data)
      localStorage.setItem("ListPromoEmploi",JSON.stringify(response.data))})
  }
  


  return (

    
    <div className='sidenav'>
      <div className='avatar'>
        <img src={avatar} alt='avatar' className='avatar' />
        <div className='user-info'>
        
          <h5 >{user.lastname}</h5>
          
          <p>{user.role}</p>
        </div>
        </div>
        <ul>
        
        <li>

          <a href='/admin/StudentDB'><HiOutlineDatabase style={{color: 'white'}}/> Effectif</a>
        </li>
       
    </ul> 
       
       <ul>
            <li>
                <a href='/admin/Promotion'> <AiFillDatabase style={{}}/>Module</a>
            </li>
        </ul> 
        
      
        
        <ul>
            <li>
                <a onClick={PromolistEmploi} href='/admin/TimeTable'><AiOutlineSchedule style={{color: 'white'}}/>Emploi du Temps</a>
            </li>
        </ul> 
        <ul>
            <li>
                <a href='/admin/Events'> <BiNews style={{color: 'white'}} />Evènements</a>
            </li>
        </ul> 
        <ul>
            <li>
                <a href='/admin/deliberation'> <VscNotebook style={{color: 'white'}} />Déliberation</a>
            </li>
            
        </ul> 
       
         <button style={{border:"none",width:"70px",height:"40px",borderRadius:"10px",backgroundColor:"white",marginLeft:"50px"}}>
         <MdLogout onClick={logout} 
        style={{color:"#0A1F31",width:"30px",height:"20px"}}/>
         </button>
    </div>
  )
}
export default NavBar;