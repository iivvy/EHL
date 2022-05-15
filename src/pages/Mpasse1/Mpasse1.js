import React, { useState } from 'react';
import Database from '../database/Database';

import './Mpasse1.css';
import Mpassef1 from './Mpassef1';


const Mpasse1 = () => {
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
          <Mpassef1 submitForm={submitForm} />
        ) : (
          <Database/>
        )}
      </div>
    </>
  );
};

export default Mpasse1;
