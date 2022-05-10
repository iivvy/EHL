import React  from 'react';

import validate from './validateIn1'
import useForm from './useFor1';
import './Enseignant.css'



const Enseignant = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right2'>
      <form onSubmit={handleSubmit} className='form2' noValidate>
       
        <div className='form-inputs2'>
          <label className='form-label2'>Nom</label>
          <input
            className='form-input2'
            type='text'
            name='Nom'
            placeholder='Nom'
            value={values.Nom}
            onChange={handleChange}
          />
          {errors.Nom && <p>{errors.Nom}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Prénom</label>
          <input
            className='form-input2'
            type='text'
            name='Prénom'
            placeholder='Prénom'
            value={values.Prénom}
            onChange={handleChange}
          />
          {errors.Prénom && <p>{errors.Prénom}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Email</label>
          <input
            className='form-input2'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Numéro De Téléphone</label>
          <input
            className='form-input2'
            type='tel'
            name='Numéro_De_Téléphone'
            placeholder='Numéro De Téléphone'
            value={values.Numéro_De_Téléphone}
            onChange={handleChange}
          />
          {errors.Numéro_De_Téléphone && <p>{errors.Numéro_De_Téléphone}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Promotion</label>
          <input
            className='form-input2'
            type='text'
            name='Promotion'
            placeholder='Promotion'
            value={values.Promotion}
            onChange={handleChange}
          />
          {errors.Promotion && <p>{errors.Promotion}</p>}
        </div>
        <div className='form-inputs2'>
          <label className='form-label2'>Groupe</label>
          <input
            className='form-input2'
            type='text'
            name='Groupe'
            placeholder='Groupe'
            value={values.Groupe}
            onChange={handleChange}
          />
          {errors.Groupe && <p>{errors.Groupe}</p>}
        </div>
        {/* <div className='form-inputs1'>
          <label className='form-label1'>Password</label>
          <input
            className='form-input1'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Confirm Password</label>
          <input
            className='form-input1'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <button className='form-input-btn2' type='submit'>
          Sign up
        </button>
        {/* <span className='form-input-login1'>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default Enseignant;