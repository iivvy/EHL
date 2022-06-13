import React from 'react'
import Home from '../../../../Base/Home'
import { useRef, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import adminService from '../../../../../services/adminService'


const EditTeacherProfile = () => {

    const[Nom,setNom] = React.useState('')
    const[Prenom,setPrenom] = React.useState('')
    const[Email,setEmail] = React.useState('')
    const[DateNaissance,setDateNaissance] = React.useState('')
    const[Adresse,setAdresse] = React.useState('')
    const[Telephone,setTelephone] = React.useState('')
    const[Genre,setGenre] = React.useState('')
    const[Civil,setCivil] = React.useState('')
    const[Grade,setGrade] = React.useState('')

    
    const cancel = () => {
        window.open('/admin/TeacherDB','_self')
    }

    const currentTeacher = useRef();
    const {teacherId} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      getCurrentTeacher();}, []);
    const getCurrentTeacher = () => {
        adminService.getTeacher(teacherId).then((response) => {
            currentTeacher.current = response.data;
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setEmail(response.data.email)
            setDateNaissance(response.data.dateNaissance)
            setAdresse(response.data.adresse)
            setTelephone(response.data.telephone)
            setGenre(response.data.genre)
            setCivil(response.data.civil)

        }).catch((error) => {
            console.log(error);
        });

    };
    function getFields(){
        return{
            ...currentTeacher.current,
            nom: Nom,
            prenom: Prenom,
            email: Email,
            dateNaissance: DateNaissance,
            adresse: Adresse,
            telephone: Telephone,
            genre: Genre,
            civil: Civil,
            grade: Grade

        }
    }
    const editTeacher = useCallback(
      (modifiedTeacher) => {
        adminService.editTeacher(teacherId,modifiedTeacher)
        .then((response) => {
            console.log(response);
            navigate('/admin/TeacherDB');
        
      })
        .catch((error) => {
            console.log(error);
        }
    )});
    
    
  return (
    <div className='generel'>
        <Home/>
        <div className='profile-cont'>
            <div className='edit-header'>
                <h3>Modifier Profile</h3>
            </div>
            <div className='infos-cont'>
                <div className='image'>
                    <img src/>
                </div>
                <div className='informations'>
                    <div className='fullname'>
                        <div className='full-name'>
                            <label>Nom:</label>
                            <input value={Nom} onChange={(e) => setNom(e.target.value)}></input>
                        </div>
                        <div className='full-name'>
                            <label>Prénom:</label>
                        <input value={Prenom}  onChange={(e) => setPrenom(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='mail'>
                        <label>Email:</label>
                        <input value={Email}
                  onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='genre'>
                        <label>Sexe:</label>
                        <input value={Genre} onChange={(e)=>setGenre(e.target.value)}></input>
                    </div>
                    <div className='naissance'>
                        <label>Date de naissance:</label>
                        <input value={DateNaissance} onChange={(e)=>setDateNaissance(e.target.value)}></input>
                    </div>
                    <div className='adr'>
                        <label>Adresse:</label>
                        <input value={Adresse} onChange={(e)=>setAdresse(e.target.value)}></input>
                    </div>
                    <div className='phone'>
                        <label>Numéro de téléphone:</label>
                        <input value={Telephone} onChange={(e)=>setTelephone(e.target.value)}></input>
                    </div>
                    <div className='annee'>
                        <label>Grade</label>
                        <input value={Grade} onChange={(e)=>setGrade(e.target.value)}></input>
                    </div>
                    <div className='promotion'>
                        <label>Etat civil:</label>
                        <input value={Civil} onChange={(e)=>setCivil(e.target.value)} ></input>
                    </div>
                    <div className='buttons'>
                   
                    <div className='edit-button'>
                    <button onClick={editTeacher(getFields())}>Enregistrer</button>
                </div>
                <div className='cancel'>
                    <button onClick={cancel}> Annuler</button>
                </div>
                </div>
                </div>
              

            </div>
        </div>
    </div>
  )
}

export default EditTeacherProfile