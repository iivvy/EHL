import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { useState } from 'react';

const Test = () => {
	useEffect(() => {
		function start() {
		gapi.client.init({
		clientId:'192422501921-pqcqfjktb6fpb17cr26av9oh7cn3fr5g.apps.googleusercontent.com',
		scope: 'openid email profile https://www.googleapis.com/auth/calendar',
		  });
		   }
		  gapi.load('client:auth2', start);
		   }, []);
	   
		 const onSuccess = response => {
		 console.log('SUCCESS', response);
		 const {code}= response
		 axios.post("http://localhost:8080/api/create-tokens",{code})
		 .then(response=>{
			 console.log(response.data)
			 setSignin(true)
		 })
		 .catch(error => console.log(error.message))
		  };
		 const onFailure = response => {
		   console.log('FAILED', response);
		   };
		  const onLogoutSuccess = () => {
		   console.log('SUCESS LOG OUT');
			};
		  const handleClick = (e) => {
				e.preventDefault();
				// console.log(DateDebut, DateFin, Module, Type, Prof, Salle, Promotion, Groupe);
				axios.post("http://localhost:8080/api/create-event", {
					DateDebut,
					DateFin,
					Module,
					Type,
					Prof,
					Salle,
					Promotion,
					Groupe,
					Email
				  })
					.then(response => {
						console.log(response.data);
						
					})
					.catch(error => console.log(error.message))
			}
			const [DateDebut, setDateDebut] = useState('')
			const [DateFin, setDateFin] = useState('')
			const[Module,setModule]=useState('')
			const[Type,setType]=useState('')
			const[Prof,setProf]=useState('')
			const[Salle,setSalle]=useState('')
			const[Promotion,setPromotion]=useState('')
			const[Groupe,setGroupe]=useState('')
			const [Signin,setSignin]=useState(false)
			const [Email,setEmail]=useState('')
	   
		   return (
		   <div>
			   <div>
				   {!Signin?(
					   <div>
				   <GoogleLogin
		  clientId={"192422501921-pqcqfjktb6fpb17cr26av9oh7cn3fr5g.apps.googleusercontent.com"}
		 onFailure={onFailure}
		 onSuccess={onSuccess}
		 responseType='code'
		 accessType='offline'
		   />
		 <GoogleLogout
		   clientId={"192422501921-pqcqfjktb6fpb17cr26av9oh7cn3fr5g.apps.googleusercontent.com"}
	   
		   onLogoutSuccess={onLogoutSuccess}
	   
			 />
			 </div>
			 ):( <div>
				<div className='calendar'>
		 <div className='event'>
		   <h1> Ajouter une séance:</h1>
		 </div>
		 <div className='event-form' >
		   <div className='event'>
			 <label>Date début:</label>
			 <input value={DateDebut} onChange={(event) => {setDateDebut(event.target.value);}} type='datetime-local' placeholder='Date Début'></input></div>
			 <div className='event'>
			 <label>Date fin:</label>
			 <input value={DateFin} onChange={(event) => {setDateFin(event.target.value);}} type='datetime-local' placeholder='Date Fin'></input>
		   </div>
		   <div className='event'>
			 <label>Module:</label>
			 <select value={Module} onChange={(event) => {setModule(event.target.value);}} name='module'>
			 <option value="ACSI">ACSI</option>
			 <option value="SE">SE</option>
			 <option value="THL">THL</option>
			 </select>
			 </div>
		   <div className='event'>
			 <label>Type:</label>
			 <select value={Type} onChange={(event) => {setType(event.target.value);}} name='type'>
			 <option value="Cours">Cours</option>
			 <option value="TD">TD</option>
			 <option value="TP">TP</option>
			 </select>
		   </div>
		   <div className='event'>
			 <label>Enseignant:</label>
			 <select value={Prof} onChange={(event) => {setProf(event.target.value);}} name='select'>
			 <option value="BENSABER">bensaber</option>
			 <option value="BENSLIMANE">benslimane</option>
			 <option value="AMRANE">amrane</option>
			 </select>
		   </div>
		   <div className='event'>
			 <label>Salle:</label>
			 <select value={Salle} onChange={(event) => {setSalle(event.target.value);}}>
			 <option value="S1">S1</option>
			 <option value="AMPHI E">Amphi E</option>
			 <option value="TP 12">TP 12</option>
			 </select>
		   </div>
		   <div className='event'>
			 <label>Promotion:</label>   
			 <select value={Promotion} onChange={(event) => {setPromotion(event.target.value);}}>
			 <option value="1CP">1CP</option>
			 <option value="2CP">2CP</option>
			 <option value="1SC">1SC</option></select>       
		   </div>
		   <div className='event'>
			 <label>Groupe:</label>
			 <select value={Groupe} onChange={(event) => {setGroupe(event.target.value);}}>
			 <option value="G1">G1</option>
			 <option value="G3">G3</option>
			 <option value="G5">G5</option>
			   </select> 
		   </div>
		   <div className='event'>
			   <label>email</label>
			   <input value={Email} onChange={(event) => {setEmail(event.target.value);}} type='email' placeholder='Email'></input>
		   </div>
		   <div className='event-button'>
		   <button onClick={handleClick}>Ajouter</button>
		 </div>
		 
		 </div>
	   
				</div>
			  </div>)}
			   </div>
		  
			
		   </div>
		   );
}

export default Test