
import React  from 'react';

import validate from './validateIn'
import useForm from './useFor';
import './cours.css'



const Cours = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right1'>
      <form onSubmit={handleSubmit} className='form1' noValidate>
       
        <div className='form-inputs1'>
          <label className='form-label1'>Nom</label>
          <input
            className='form-input1'
            type='text'
            name='Nom'
            placeholder='Nom'
            value={values.Nom}
            onChange={handleChange}
          />
          {errors.Nom && <p>{errors.Nom}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Prénom</label>
          <input
            className='form-input1'
            type='text'
            name='Prénom'
            placeholder='Prénom'
            value={values.Prénom}
            onChange={handleChange}
          />
          {errors.Prénom && <p>{errors.Prénom}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Email</label>
          <input
            className='form-input1'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Numéro inscription</label>
          <input
            className='form-input1'
            type='text'
            name='Numéro_inscription'
            placeholder='Numéro inscription'
            value={values.Numéro_inscription}
            onChange={handleChange}
          />
          {errors.Numéro_inscription && <p>{errors.Numéro_inscription}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Promotion</label>
          <input
            className='form-input1'
            type='text'
            name='Promotion'
            placeholder='Promotion'
            value={values.Promotion}
            onChange={handleChange}
          />
          {errors.Promotion && <p>{errors.Promotion}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Groupe</label>
          <input
            className='form-input1'
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
        <button className='form-input-btn1' type='submit'>
          Sign up
        </button>
        {/* <span className='form-input-login1'>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default Cours;