import axios from 'axios';
import React, { useState } from 'react';

import Mpasse1 from '../Mpasse1/Mpasse1'
import './Mpasse.css';
import Mpassef from './Mpassef';


const Mpasse= () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resfp = JSON.parse(localStorage.getItem("response"));

  function submitForm() {
    
      setIsSubmitted(true); 

     

             
  }
  return (
    <>
      <div className='form-container'>
      
        {/* <span className='close-btn'>x</span> */}
        <div className='form-content-left'>
          <img className='form-img' src='img/online.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Mpassef submitForm={submitForm} />
        ) : (
          <Mpasse1/>
        )}
      </div>
    </>
  );
};

export default Mpasse;
