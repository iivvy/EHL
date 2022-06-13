import React ,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { userRows } from '../../datatablesource';
import {AiOutlineMail} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';

const Prof= () => {
    const {id} = useParams();
    // const [user,setUser] = useState([]);
    // useEffect(()=>{
    //     const getUser = async()=>{
    //         const response = await fetch(`http://localhost:5000/api/Database/${id}`);
    //         const data = await response.json();
    //         setUser(data);
    //     }
    //     getUser();
    // },[]);
    const showprofile =()=>{
        return(
            <div className='contt'>
                <div className='id'>
                    {userRows.id}
                </div>
                <div className='userimg'>
                <img src={userRows.img} alt={userRows.name}/>
                </div>
                <div className='info'>
                    <div className='name'>
                        {userRows.name}
                    </div>
                    <div className='promo'>
                        <p>{userRows.class} student</p>
                    </div>
                    <div className='contact'>
                        <div className='message'>
                            <BsChatDots/>
                        </div>
                        <div className='mail'>
                            <AiOutlineMail/>
                        </div>
                    </div>
                    <div className='desc'>
                        <p>description</p>
                    </div>
                    <div className='lieu'>
                        <p>lieu Naissance</p>
                    </div>
                    <div className='date'>
                        <p>date Naissance</p>
                    </div>
                    <div className='groupe'>
                        <p>groupe</p>
                    </div>
                    <div className='sexe'>
                        <p>sexe</p>
                    </div>
                    <div className='adresse'>
                        <p>adresse</p>
                    </div>
                    
                </div>
                
                
            </div>
        )

    }
        
  return (
    <div>
        <div className='profileContainer'>

        </div>


    </div>
  )
}

export default Prof;