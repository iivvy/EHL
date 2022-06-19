import React, { useState } from 'react';
import validate from './validateInfomp';
import useFormmp from './useFormmp';
import './Mpasse.css';
import axios from 'axios';


const Mpassef= ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormmp(
    submitForm,
    validate
  );
  


  return (
    <div className='form-content-right'>
      {/* <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div> */}
       
      <div ClassName='image '>
      <img className='form-imge' src='img/background.jpg' alt='spaceship' />
     </div>
    
      <form onSubmit={handleSubmit} className='form' noValidate>
        
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='code'
            placeholder='Entrez le code que vous avez reçu '
            value={values.code}
            onChange={handleChange}
          />
          {errors.code && <p>{errors.code}</p>}
        </div>
        
         <button className='form-input-btnn' type='submit'>
          Envoyer
        </button>
        
      </form>
      <div className='logo'>
        <img className ="logoo" src='/Users/aroua/Documents/GitHub/Projet1CS_Enseignement/src/components/avatar.svg' alt='avatar'></img>
      </div>
    </div>
  );
};

export default Mpassef;
