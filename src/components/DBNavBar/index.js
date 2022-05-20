import React from 'react';

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
          <NavLink to='/bdd/etudiantBd' activeStyle>
          Etudiant
          </NavLink>
          <NavLink to='/bdd/enseignantBd' activeStyle>
          Enseignant
          </NavLink>
          <NavLink to='/bdd/staffBd' activeStyle>
            Administration
          </NavLink>
        

        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbardb;
