import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
       
      <div ClassName='image '>
      <img className='form-imge' src='img/background.jpg' alt='spaceship' />
     </div>
    
      <form onSubmit={handleSubmit} className='form' noValidate>
        
        <div className='form-inputs'>
          <input
            className='form-input'
            id='email'
            type='email'
            name='email'
            placeholder='Adresse Email '
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            id='password'
            type='password'
            name='password'
            placeholder='Mot de passe '
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
         <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          <a href='https://fr.wikipedia.org/wiki/VV'>Mot de passe oublié ?</a>
        
        </span>
      </form>
      
    </div>
  );
};

export default FormLogin;
