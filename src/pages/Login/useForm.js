import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useLocation} from 'react-router-dom';


const useForm = (callback, validate) => {
  const navigate =useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [IsSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const LoginUser ={
      email: values.email,
      password: values.password,
    }
    const {data} = await axios.post('http://localhost:8080/api/auth/signin',LoginUser);
    console.log(data);
    console.log("success")
  
      setErrors(validate(values,false,false));
      console.log(data);
      const firstname = data.FirstName;
      const lastname = data.LastName;
      const username = data.username;
      const email = data.email;
      const role = data.role;
      const sexe = data.sexe;
      const id = data.id;
      localStorage.setItem('user',JSON.stringify({firstname:data.FirstName, lastname:data.LastName,username:data.username,email:data.email,role:data.role,sexe:data.sexe,id:data.id}));
     setErrors(validate(values));
     setIsSubmitting(true);
     navigate('/'+data.role);
      
    }
  


  

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

export default useForm;
