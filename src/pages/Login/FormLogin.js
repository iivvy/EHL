
// import React from 'react'; 
// import validate from './validateInfo'; 
// import useForm from './useForm'; 
// import './Form.css'; 
// import axios from 'axios'; 
// import { browserHistory } from 'react-router';

// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { Redirect } from 'react-router';
 
// export default class Login extends React.Component{ 
  
//   constructor(props){ 
//       super(props); 
//       this.state = { 
//          email : '' , 
//          password : '', 
//          redirectToReferrer : false 
//       }; 
//       this.handleChange = this.handleChange.bind(this); 
//       this.handleSubmit = this.handleSubmit.bind(this); 
//   }  
//   handleChange(event){ 
//     this.setState({ 
//         [event.target.name] : event.target.value 
         
//     }); 
// } 

// handleSubmit(event){ 
//     event.preventDefault(); 
 
//     const user = { 
//     email : this.state.email, 
//     password : this.state.password 
//     }; 
     
// if(this.state.email && this.state.password)       
// { 
// axios.post(`http://localhost:8080/api/auth/signin`,user) 
// .then((response) => 
// {  
//     let userresponse = response; 
   
   
 
    

//     // const newdata=JSON.parse(userresponse.data);
//     console.log(userresponse.data); 
//     // console.log(newdata);
//     alert("succes login"); 
    
//     // browserHistory.push('/bdd');
    
//     if(userresponse){ 
//       if (userresponse.status === 200) { 
//         this.setState({ 
//           redirectToReferrer : true,
//         }); 
//       }
//     // sessionStorage.setItem('data',JSON.stringify(userresponse)); 
//     // this.setState({redirectToReferrer: true}); 
//     // this.setState({selectedUser: JSON.parse(userresponse.data)});
//     // console.log(this.state.selectedUser);
//     // console.log(userresponse.data);

//     }
    
     
// },this) 
// .catch((error) => alert(error)) 
            
// } 
// } 

 

    
//  render(){ 
//    if (
//    this.state.redirectToReferrer
//  ){
//   //  return <Link to='/bdd' />
//   return window.location.href = '/bdd/etudiantBd';
  
//  }

  

//   //  if (this.state.selectedUser.body.role === "admin"){
//   //    URL='/bdd'
//   //   } else {
//   //     URL="/login";
//   //   }
//   // alert(this.state.selectedUser);
     
   
//   return ( 
//     <div className='form-content-right'> 
//       {/* <div className='logo'> 
//         <img src={logo} alt='logo'></img> 
//       </div> */} 
        
//       <div ClassName='image '> 
//        <img className='form-imge' src='img/background.jpg' alt='spaceship' /> 
//      </div> 
     
//       <form onSubmit={this.handleSubmit} className='form' noValidate> 
         
//         <div className='form-inputs'> 
//           <input 
//             className='form-input' 
//             id='email' 
//             type='email' 
//             name='email' 
//             placeholder='Adresse Email' 
//             onChange={this.handleChange} 
//           /> 
        
//         </div> 
//         <div className='form-inputs'> 
           
//           <input 
//             className='form-input' 
//             id='password' 
//             type='password' 
//             name='password' 
//             placeholder='Mot de passe ' 
//             onChange={this.handleChange} 
//           /> 
//         </div> 
//          <button className='form-input-btn' type='submit'> 
//          <a href='' style={{color:"white",textDecoration:"none"}} >Login </a>
          
//         </button> 
//         <span className='form-input-login'> 
//           <a href='/mpasse'>Mot de passe oublié ?</a> 
         
//         </span> 
//       </form> 
//       <div className='logo'> 
//         <img className ="logoo" src='/Users/aroua/Documents/GitHub/Projet1CS_Enseignement/src/components/avatar.svg' alt='avatar'></img> 
//       </div> 
//     </div> 
//   ); 
// } 
// }

// export default FormLogin;


import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Home from '../Base/Home';
import axios from 'axios';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const forget =()=>{
    localStorage.setItem ('emailfp',JSON.stringify({email:values.email}))
    axios.post(`http://localhost:8080/api/auth/forgetPass`,{
      email:values.email,
    })

  }
 

  return (
    <div>
      
    <div className='form-content-right'>
      {/* <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div> */}
       
      <div ClassName='imagen '>
        <img className='form-imgen' src='img/background.jpg' alt='spaceship' />
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
         <button className='form-input-btne' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          <a onClick={forget} href='/mpasse'>Mot de passe oublié ?</a>
        
        </span>
      </form>
      <div className='logo'>
        <img className ="logoo" src='/Users/aroua/Documents/GitHub/Projet1CS_Enseignement/src/components/avatar.svg' alt='avatar'></img>
      </div>
    </div>
    </div>
  );
};

export default FormLogin;