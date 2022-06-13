import React from 'react';
import validate from './validateInfomp1';
import useFormmp1 from './useFormmp1';
import './Mpasse1.css';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormmp1(
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
            type='password'
            name='password1'
            placeholder='Entrez votre nouveau mot de passe  '
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirmez votre nouveau mot de passe  '
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
         <button className='form-input-btn' type='submit'>
          Changer
        </button>
        
      </form>
      <div className='logo'>
        <img className ="logoo" src='/Users/aroua/Documents/GitHub/Projet1CS_Enseignement/src/components/avatar.svg' alt='avatar'></img>
      </div>
    </div>
  );
};

export default FormLogin;
