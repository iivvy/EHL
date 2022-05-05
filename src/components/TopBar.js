import './TopBar.css';
import avatar from './avatar.svg'
import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import {CgChevronDoubleDown} from 'react-icons/cg';
const TopBar = () => {
  return (
    <div className='TopBar'>
      
        <div className='wrapper'>
            <div className='search'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search'   ></input>     
            </div>
            <div className='items'>
              <div className='item' >
                  <div className='circle'>
                    <NotificationsNoneOutlinedIcon />
                     </div>
                   <div className='counter'>1</div>
              </div>
            <div className='userbar' >
               <img src={avatar} alt='avatar' className='avatarbar'/>
               <div className='username'>
                   <h5>Hadjer FERRAR</h5>
               </div>
                <div className='more'>
                    <CgChevronDoubleDown/>
                </div>
             </div>
            </div>
            
        </div>  
        
          
         
        
       
        
    </div>
    
  )
}
export default TopBar