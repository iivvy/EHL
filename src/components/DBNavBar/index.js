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
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/etudiantDb' activeStyle>
            Etudiant
          </NavLink>
          <NavLink to='/enseignantDb' activeStyle>
            Enseignant
          </NavLink>
          <NavLink to='/staffBd' activeStyle>
            Administration
          </NavLink>

        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbardb;
