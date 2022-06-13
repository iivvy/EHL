import React, { useState } from 'react';

import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';





const Form = () => {
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
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
