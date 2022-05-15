import React, { useState } from 'react';
import Database from '../database/Database';
import Mpasse1 from '../Mpasse1/Mpasse1'
import './Mpasse.css';
import Mpassef from './Mpassef';


const Mpasse= () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
