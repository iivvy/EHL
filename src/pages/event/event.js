import React from 'react'
import validate from './valider';
import UseForm from './eventForm';
import './event.css'
const Event  = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(
      submitForm,
      validate
    );
    return (
      <div className='form-content-right3'>
        <form onSubmit={handleSubmit} className='form3' noValidate>
         
          <div className='form-inputs3'>
            <label className='form-label3'>Titre</label>
            <input
              className='form-input3'
              type='text'
              placeholder='titre'
              name='Titre'
             
              value={values.Titre}
              onChange={handleChange}
            />
            {errors.Titre && <p>{errors.Titre}</p>}
          </div>
          <div className='form-inputs3'>
            <label className='form-label3'>Auteur</label>
            <input
              className='form-input2'
              type='text'
              name='Auteur'
              placeholder='Auteur'
              value={values.Auteur}
              onChange={handleChange}
            />
            {errors.Auteur && <p>{errors.Auteur}</p>}
          </div>
          
          <div className='form-inputs3'>
            <label className='form-label3'>Image</label>
            <input
              className='form-input3'
              type='image'
              name='Image'
              placeholder='Image'
              value={values.Image}
              onChange={handleChange}
            />
            {errors.Image && <p>{errors.Image}</p>}
          </div>
          <div className='form-inputs4'>
            <label className='form-label4'>Description</label>
            <textarea placeholder='Description' classname="form-input4" name="paragraph_text" cols="50" rows="10"></textarea>
            {errors.Description && <p>{errors.Description}</p>}
          </div>
          <button className='form-input-btn3' type='submit'>
            Ajouter
          </button>
          {/* <span className='form-input-login1'>
            Already have an account? Login <a href='#'>here</a>
          </span> */}
        </form>
      </div>
    );
  };

export default Event