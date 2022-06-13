import React from 'react'
import Home from '../../../../Base/Home'
import './editstudentprofile.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useRef,useEffect } from 'react'
import AdminService from '../../../../../services/adminService'
import { useCallback } from 'react'


const EditStudentProfile = () => {
    const[Nom,setNom] = React.useState('')
    const[Prenom,setPrenom] = React.useState('')
    const[Email,setEmail] = React.useState('')
    const[DateNaissance,setDateNaissance] = React.useState('')
    const[Adresse,setAdresse] = React.useState('')
    const[Telephone,setTelephone] = React.useState('')
    const[Genre,setGenre] = React.useState('')
    const[Promotion,setPromotion] = React.useState('')
    const[Groupe,setGroupe] = React.useState('')
    const[Annee,setAnnee] = React.useState('')
    const navigate = useNavigate();

	const currentStudent = useRef();

	const { studentId } = useParams();
    const cancel = () => {
        window.open('/admin/StudentDB','_self')
    }


	useEffect(() => {
		getCurrentStudent();
	}, []);
  
	const getCurrentStudent = () => {
		AdminService.getStudent(studentId).then((response) => {
			currentStudent.current = response.data;
			setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setEmail(response.data.email)
            setDateNaissance(response.data.dateNaissance)
            setAdresse(response.data.adresse)
            setTelephone(response.data.telephone)
            setGenre(response.data.genre)
            setPromotion(response.data.promotion)
            setGroupe(response.data.groupe)
            setAnnee(response.data.annee)
        }).catch((error) => {
            console.log(error);
        })
		};
		const editStudent = useCallback((modifiedStudent) => () => {
            AdminService
                .editStudent(studentId, modifiedStudent)
                .then((response) => {
                    console.log(response);
                    navigate("/admin/StudentDB");
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    
        function getFields() {
            return {
                ...currentStudent.current,
                nom: Nom,
                prenom: Prenom,
                email: Email,
                dateNaissance: DateNaissance,
                adresse: Adresse,
                telephone: Telephone,
                genre: Genre,
                promotion: Promotion,
                groupe: Groupe,
                annee: Annee

                
            };
        }
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
                            <input value={Nom}  onChange={(e) => setNom(e.target.value)}></input>
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
                        <label>Année universitaire:</label>
                        <input value={Annee} onChange={(e)=>setAnnee(e.target.value)}></input>
                    </div>
                    <div className='promotion'>
                        <label>Promotion:</label>
                        <input value={Promotion} onChange={(e)=>setPromotion(e.target.value)} ></input>
                    </div>
                    <div className='group'>
                        <label>Groupe:</label>
                        <input value={Groupe} onChange={(e)=>setGroupe(e.target.value)}></input>
                    </div>
                    <div className='buttons'>
                   
                    <div className='edit-button'>
                    <button onClick={editStudent(getFields())}>Enregistrer</button>
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

export default EditStudentProfile