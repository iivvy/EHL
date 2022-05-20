
import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from './NavbarElements';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import {BsThreeDotsVertical} from 'react-icons/bs';
class Drop extends React.Component {
  constructor(){
    super(...arguments);
    this.items = [
      {
      text:'Ajouter etudiant manuellement'
    },
    {
      text:'Ajouter etudiant automatiquement'
    }
  ];
  }
  // render (){
  //   return (
  //     <div className='drop'>
  //       <Button>
  //         <BsThreeDotsVertical 
  //          items={this.items} iconCss='ddb-icons e-message' 
  //          cssClass='e-vertical' iconPosition='Top'/>
  //       </Button>
        
  //     </div>
  //   )
  // }
}
ReactDom.render(<Drop />, document.getElementById('button'));


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
        
          <Button 
          style={{marginLeft:"620px"}} ><BsThreeDotsVertical
           style={{color:"#A4A4A4",height:"30px",width:"30px",marginRight:"20px"}}
           items={this.items} iconCss='ddb-icons e-message' 
           cssClass='e-vertical' iconPosition='Top'
           /></Button>

        

        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbardb;
