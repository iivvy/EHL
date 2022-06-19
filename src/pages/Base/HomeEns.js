
import './HomeEns.css';
import React from 'react';
import TopBar from '../../components/TopBar';
import SideBarEnseignant from '../../components/SideBarEnseignant';


const HomeEns=()=> {
  return (
    <div className='home'>
      <SideBarEnseignant/>
      <div className='homeContainer'>
         <TopBar /> 
         <hr />
         
         
      </div>
      
      
    </div>
  );
}

export default HomeEns;
