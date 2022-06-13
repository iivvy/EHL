import axios  from "axios";
import React, { useState} from "react";
import Home from "../../../Base/Home";
import './table.css'
function Table () {
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
      console.log(Prénom);
      console.log(email);
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
            console.log("sucess,suceess,suceess,sucess,suceess,suceess,sucess,suceess,suceess,sucess,suceess,suceess");
          });
        };
        
       
       

    
  return(
  <div>
    <Home/>
    <div className='form-content-right1'>
      <form  className='form1'>
        <div className='form-inputs1'>
          <label className='form-label1'>Nom</label>
           <input
              className='form-input1'
              type='text'
              name='Nom'
              placeholder='Nom'
              onChange={(event)=>{
                setNom(event.target.value);
                }}/></div>
          <div className='form-inputs1'>
            <label className='form-label1'>Prénom</label>
             <input
              className='form-input1'
              type='text'
              name='Prénom'
              placeholder='Prénom'
              onChange={(event) => {setPrénom(event.target.value);}}
              />
              </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Email</label>
            <input
              className='form-input1'
              type='email'
              name='email'
              placeholder='Email'
          
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />

          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Genre</label>
            <select
            onChange={(event) => {
              setGenre(event.target.value);
            }}
              className='form-input1'    
              name='Genre'
              >
              <option value='Féminin'>Féminin</option>
              <option value='Masculin'>Masculin</option>
            </select>
            </div>
            <div className='form-inputs1'>
            <label className='form-label1'>DateDeNaissance</label>
            <input
              className='form-input1'
              type='date'
              name='DateDeNaissance'
              placeholder='Date de naissance'
              onChange={(event) => {
                setDateDeNaissance(event.target.value);
              }}
            />
           
          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Adresse</label>
            <input
              className='form-input1'
              type='text'
              name='Adresse'
              placeholder='Adresse'
              onChange={(event) => {
                setAdresse(event.target.value);
              }}
            />
           
          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Numéro_telephone</label>
            <input
              className='form-input1'
              type='text'
              name='Numéro_telephone'
              placeholder='Adresse'
              onChange={(event) => {
                setNuméro_telephone(event.target.value);
              }}
            />
           
          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Numéro_inscription</label>
            <input
              className='form-input1'
              type='text'
              name='Numéro_inscription'
              placeholder='Numéro inscription'

              onChange={(event) => {
                setNuméro_inscription(event.target.value);
              }}
            />
           
          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Annee_scolaire</label>
            <input
              className='form-input1'
              type='text'
              name='Annee_scolaire'
              placeholder='Annee scolaire'

              onChange={(event) => {
                setAnnee_scolaire(event.target.value);
              }}
            />
           
          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Promotion</label>
            <select
             onChange={(event) => {
              setPromotion(event.target.value);
            }}
              className='form-input1'    
              name='Promotion'>
              <option value='1CP'>1CP</option>
              <option value='2CP'>2CP</option>
              <option value='1SC'>1SC</option>
              <option value='2SC'>2SC</option>
              <option value='3SC'>3SC</option>
            </select>

          </div>
          <div className='form-inputs1'>
            <label className='form-label1'>Groupe</label>
            <input
              className='form-input1'
              type='text'
              name='Groupe'
              placeholder='Groupe'

              onChange={(event) => {
                setGroupe(event.target.value);
              }}
            />

          </div>
          <button onClick={addStudent} className='form-input-btn1' >
               Ajouter
            </button>
   
          
          </form>
    </div>
   
   
    </div>
  );
    
}
export default Table;