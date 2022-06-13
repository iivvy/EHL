import axios from "axios";
import React from "react";
import {useState} from 'react'
import Home from "../../../Base/Home";
import './table.css'

function AjouterStudent (){
    const [Nom,setNom]  = useState(" ");
    const [Prénom,setPrénom]  = useState(" ");
    const [email,setemail]  = useState("");
    const [Genre,setGenre]  = useState("");
    const [DateDeNaissance,setDateDeNaissance]  = useState("");
    const [Adresse,setAdresse]  = useState("");
    const [Numéro_telephone,setNuméro_telephone]  = useState("");
    const [Numéro_inscription,setNuméro_inscription]  = useState("");
    const [Annee_scolaire,setAnnee_scolaire]  = useState("");
    const [Promotion,setPromotion]  = useState("");
    const [Groupe,setGroupe]  = useState("");
    const addStudent = () =>{
        console.log(Nom);
        axios.post(`http://localhost:8080/api/Etudiant/ajouteretudiant`,{
            Nom,
            Prénom,
            email,
            Genre,
            DateDeNaissance,
            Adresse,
            Numéro_telephone,
            Numéro_inscription,
            Annee_scolaire,
            Promotion,
            Groupe,
        }).then(()=>{
            alert("success"); 
        });
    };
    return(
        <div>
            <Home/>
            <div className="Student">
                <div className="info">
                
                    <div class='form-groups'>
                    
                      <label>Nom:</label>
                      <input
                    required
                    type="text"
                    onChange={(event) => {
                        setNom(event.target.value);
                    }}/>
                    {/* </div> */}
                    </div>
                
                    <div class='form-groups'>
                     
                      <label>Prénom:</label>
                      <input
                     required
                    type="text"
                    onChange={(event) => {
                        setPrénom(event.target.value);
                        }}/>
                        {/* </div> */}
                        </div>

                    
                    
                        <div class='form-groups'>
                         <label>Email:</label>
                        <input
                        required
                        type="text"
                        onChange={(event) => {
                            setemail(event.target.value);
                            }}/></div>
                            <div class='form-groups'>
                             <label>Genre:</label>
                             <input
                            type="text"
                            onChange={(event) => {
                                setGenre(event.target.value);}}/></div>
                                <div class='form-groups'>
                                 <label>Date de naissance:</label>
                                 <input
                                 type="date"
                                 onChange={(event) => {
                                     setDateDeNaissance(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Adresse:</label>
                                       <input
                                 type="text"
                                 onChange={(event) => {
                                     setAdresse(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Numéro telephone:</label>
                                       <input
                                 type="text"
                                 onChange={(event) => {
                                     setNuméro_telephone(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Numéro inscription:</label>
                                      <input
                                      required
                                 type="text"
                                 onChange={(event) => {
                                     setNuméro_inscription(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Année scolaire:</label>
                                      <input
                                 type="text"
                                 onChange={(event) => {
                                     setAnnee_scolaire(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Promotion:</label>
                                      <input
                                 type="text"
                                 onChange={(event) => {
                                     setPromotion(event.target.value);
                                     }}/></div>
                                     <div class='form-groups'>
                                      <label>Groupe:</label>
                                       <input
                                 type="text"
                                 onChange={(event) => {
                                     setGroupe(event.target.value);
                                     }}/>
                                     </div>
                                     <button onClick={addStudent}>Ajouter etudiant</button>
                                     </div>
                                      </div>
                                      </div>
                                    
    )


}
export default AjouterStudent;