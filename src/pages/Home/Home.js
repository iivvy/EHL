
import './Home.css';
import NavBar from '../../components/NavBar';
import React from 'react';
import TopBar from '../../components/TopBar';
import Datatable from '../../components/datatable/Datatable';

const Home=()=> {
  return (
    <div className='home'>
      <NavBar />
      <div className='homeContainer'>
         <TopBar /> 
         <hr />
         
         
      </div>
      
      
    </div>
  );
}

export default Home;
