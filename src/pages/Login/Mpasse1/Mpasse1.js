import React, { useState } from 'react';
import Etudiant from '../../Admin/database/etudiantBd';


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
          <Etudiant/>
        
        )}
      </div>
    </>
  );
};

export default Mpasse1;
