import axios from "axios";
import React from "react";
import {useState} from 'react'
import Home from "../../../Base/Home";
import './Enseignant.css'

function AjouterEnseignant (){
    const [Nom,setNom]  = useState(" ");
    const [Prénom,setPrénom]  = useState(" ");
    const [email,setemail]  = useState("");
    const [Genre,setGenre]  = useState("");
    const [DateDeNaissance,setDateDeNaissance]  = useState("");
    const [Adresse,setAdresse]  = useState("");
    const [Numéro_telephone,setNuméro_telephone]  = useState("");
    const [Grade,setGrade]  = useState("");
    const [Etat_civil,setEtat_civil]  = useState("");
  
    const addTeacher = () =>{
        console.log(Nom);
        axios.post(`http://localhost:8080/api/Enseignant/ajouterenseignant`,{
            Nom,
            Prénom,
            email,
            Genre,
            DateDeNaissance,
            Adresse,
            Numéro_telephone,
            Grade,
            Etat_civil
        }).then(()=>{
            alert("success"); 
        });
    };
    return(
        <div>
            <Home/>
            <div className="Enseignant">
                <div className="information">
                    <div class='form-group' >
                    <label>Nom:</label>
                    <input
                    type="text"
                    onChange={(event) => {
                        setNom(event.target.value);
                    }}/>
                    </div>

                   <div class='form-group' >
                    <label>Prénom:</label>
                    <input
                    type="text"
                    onChange={(event) => {
                        setPrénom(event.target.value);
                        }}/> </div>
                        <div class='form-group' >
                        <label>Email:</label>
                        <input
                        type="text"
                        onChange={(event) => {
                            setemail(event.target.value);
                            }}/></div>
                            <div class='form-group' >
                            <label>Genre:</label>
                            <input
                            type="text"
                            onChange={(event) => {
                                setGenre(event.target.value);}}/></div>
                                <div class='form-group' >
                                <label>Date de naissance:</label>
                                 <input
                                 type="date"
                                 onChange={(event) => {
                                     setDateDeNaissance(event.target.value);
                                     }}/></div>
                                     <div class='form-group' >
                                     <label>Adresse:</label>
                                 <input
                                 type="text"
                                 onChange={(event) => {
                                     setAdresse(event.target.value);
                                     }}/></div>
                                     <div class='form-group' >
                                     <label>Numéro telephone:</label>
                                 <input
                                 type="text"
                                 onChange={(event) => {
                                     setNuméro_telephone(event.target.value);
                                     }}/></div>
                                     <div class='form-group' >
                                     <label>Grade:</label>
                                 <input
                                 type="text"
                                 onChange={(event) => {
                                     setGrade(event.target.value);
                                     }}/></div>
                                     <div class='form-group' >
                                     
                                     <label>Etat civil:</label>
                                 <input
                                 type="text"
                                 onChange={(event) => {
                                     setEtat_civil(event.target.value);
                                     }}/></div>
                                     
                                     <button className="AddTeacher" onClick={addTeacher}>Ajouter</button>
                                     </div>
                                      </div>
                                      </div>
                                    
    )


}
export default AjouterEnseignant;