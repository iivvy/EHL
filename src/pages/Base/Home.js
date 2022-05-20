
import './Home.css';
import NavBar from '../../components/NavBar';
import React from 'react';
import TopBar from '../../components/TopBar';
import Main from '../../components/notification';

const Home=()=> {
  return (
    <div className='home'>
      <NavBar />
      <div className='homeContainer'>
         {/* <TopBar /> 
         <hr /> */}
         <Main/>
         
         
      </div>
      
      
    </div>
  );
}

export default Home;
