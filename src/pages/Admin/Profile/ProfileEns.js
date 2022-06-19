import React from 'react'
import './profileEns.css'
import HomeEns from '../../Base/Home';

const ProfileEns= () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
  return (
       
    <div className="user">
      <HomeEns/>
      <div className="user_header">
        <span><h1>Votre profile</h1></span>
         
        </div>
        <div className="profile-container">
          <div className="image-container">
            <img src="https://i1.sndcdn.com/avatars-wX7GkYqEmIrcMzNA-y7cYkQ-t500x500.jpg" alt="profile" />
            <h1>{user.username}</h1>
            <h1 style={{marginTop:"10px",fontSize:"26px",color:"#A4A4A4"}}>{user.id}</h1>
          </div>
          <div className="profile-info">
          <div className='scholar-header'><h4>Informations générales</h4></div>
 
           <div className="scholar-info">
            
         
           
              <div className='perso'>
                <h3>Nom: {user.lastname}</h3>
              </div>
              <div className='perso'>
                <h3>Prénom: {user.firstname}</h3>
              </div>
             
              <div className="perso">
                <h3>Adresse-email: {user.email}</h3>
              </div>
             
              </div>
              <hr style={{width:"700px",marginRight:"279px"}}/>
              <div className='scholar-header'><h4>informations generales</h4></div>
            <div className="scholar-info">
            
              <div className="perso">
                <h3>Sexe: {user.sexe}</h3>
              </div>
              <div className="perso">
                <h3>Date de naissance: {user.birthday}</h3>
              </div>
              <div className="perso">
                <h3>Adresse : {user.birthday}</h3>
              </div>
              <div className='perso'>
                <h3>Numéro téléphone: {user.phoneTel}</h3>
              </div>
              <div className='perso'>
                <h3>Etat-civil: {user.phoneTel}</h3>
              </div>
              <div className='perso'>
                <h3>Grade: {user.phoneTel}</h3>
              </div>
            </div>
            <hr style={{width:"700px",marginRight:"279px"}}/>
            <div className='scholar-header'><h4>Informations supplémentaires</h4></div>
            <div className='scholar-info'>
            <div className="perso" style={{marginLeft:"-350px"}}>
                <h3>Profile: {user.role}</h3>
            </div>
            <div className='perso'></div>
           
            </div>
     
              
          
          
           
          </div>
        </div>

    </div>
  )
}

export default ProfileEns