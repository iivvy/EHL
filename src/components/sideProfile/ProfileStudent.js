
import React from 'react'
import'./prof.css';


import {AiOutlineMail} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import { userRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';



const Profile = () => {
    const {id} = useParams();
    const profile=JSON.parse(localStorage.getItem('profile'))
  return (
    <div>
        <div className='contt' id='prof'>
                <div className='id'>
                    <p>{profile.id}</p>
                </div>
                <div className='userimg'>
                <img src='https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg' />
                </div>
                <div className='info'>
                    <div className='name'>
                        <p>{profile.username}</p>
                    </div>
                    <div className='promo'>
                        <p>1CS student</p>
                    </div>
                    <div className='contact '>
                        <div className='icon circle-icon'>
                            <BsChatDots/>  
                        </div>
                        <div className='icon circle-icon'>
                        <AiOutlineMail/>
                        </div>
                       
                    </div>
                    <div className='desc'>
                        <h5>About :</h5>
                        <p>student description on his profile , for long description the lines will break   </p>
                    </div>
                   <div className='part1'>
                   <div className='dateAndSexe'>
                        <h6>date Naissance</h6>
                        <p>1/1/1111</p>
                    </div>
                    <div className='dateAndSexe'>
                        <h6>sexe</h6>
                        <p>feminin</p>
                    </div>
                   </div>
                   <div className='part2'>
                   <div className='adresseAndLieu'>
                        <h6>adresse</h6>
                        <p>rue de la revolution</p>
                    </div>
                    <div className='adresseAndLieu'>
                        <h6>ville</h6>
                        <p>lieu Naissance</p>
                    </div>
                   
                   </div>
                   
                    <div className='groupe'>
                        <h6>groupe</h6>
                        <p>05</p>
                    </div>
                    <div className='empty'></div>
                   
                  
                    
                    
                </div>
                
                
            </div>
        )

    </div>
  )
}

export default Profile