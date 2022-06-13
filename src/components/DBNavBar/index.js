
import { Button } from '@mui/material';
import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import MenuPopupState from '../formmenu/FormMenu';
import LongMenu from '../formmenu/FormMenu';

 
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from './NavbarElements';




const Navbardb = () => {
  return (
    <>
      {/* <Nav style={{  background: '#fff',height: '80px' , display: 'flex',
       padding: '0.5rem calc((100vw - 1000px) / 2)',justifyContent:'flex-start',zIndex:'10', }}> */}
       <Nav>
        <Bars />
        <NavMenu>
          {/* <a href ='/bdd' activeStyle={{color:'#2E6583'}} style={{textDecoration:'none'}}>
            Etudiant
          </a>
           <a href ='/bdd' activeStyle style={{textDecoration:'none'}}>
            Enseignant
          </a> */}
           {/* <a href ='/bdd' activeStyle style={{textDecoration:'none'}}>
            Administration
          </a> */}
          <NavLink to='/admin/StudentDB' activeStyle>
          Etudiant
          </NavLink>
          <NavLink to='/admin/TeacherDB' activeStyle>
          Enseignant
          </NavLink>
          {/* <NavLink to='/bdd/staffBd' activeStyle>
            Administration
          </NavLink> */}
          <MenuPopupState  />
       
        </NavMenu>
      </Nav>

    </>
    
  );
};

export default Navbardb;
