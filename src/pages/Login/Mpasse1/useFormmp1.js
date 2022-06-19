import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useFormmp1 = (callback, validate) => {
  const [values, setValues] = useState({
    password1: '',
    password2: ''
  });
  const navigate=useNavigate();
  const emailfp =JSON.parse(localStorage.getItem('emailfp'))
  const [errors, setErrors] = useState({});
  const [IsSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/auth/Changepass`,{
      email:emailfp.email,
      nouveaumotdepasse:values.password1,
      confirmemotdepasse:values.password2,
    }).then((res)=>{
      console.log(res.data)
      navigate('/')
      
    })

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && IsSubmitting) {
        callback();
      }
    },
    [callback, errors, IsSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useFormmp1;
