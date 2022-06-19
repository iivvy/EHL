import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useFormmp = (callback, validate) => {
  const [values, setValues] = useState({
    code: ''
  });
  const [errors, setErrors] = useState({});
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };
  const emailfp =JSON.parse(localStorage.getItem('emailfp'))

  const handleSubmit =async(e)  => {
    e.preventDefault();
    const info={
      email:emailfp.email,
      code:values.code,
    }
    console.log("fyiefeg",emailfp.email)
    console.log("code",info.code)
    
     axios.post(`http://localhost:8080/api/auth/VerifierCode`,info).then((res)=>{
      console.log(res.data)
      localStorage.setItem('response',JSON.stringify({respf:res.data.VerifieCode}))
      if (res.data.VerifieCode==true){
        navigate('/mpasse1');
      }
      else{
        navigate('/')
      }

    })

     console.log("succes")
     
     
      
  
    setErrors(validate(values,false,false));
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

export default useFormmp;
