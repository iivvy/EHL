import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import './AddModule.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const AddModule = () => {
    const[Nom,setNom] = useState("");
    const[Prof,setProf] = useState("");
    const[VolumeHoraire,setVolumeHoraire] = useState("");
    const[ProfTD,setProfTD] = useState(""); 
    const[ProfTP,setProfTP] = useState("");
    const[Description,setDescription] = useState("");
    const[Image,setImage] = useState("");
  return (
    <div className='AddModule'>
        <div className='header'>
            <h3>Ajouter module</h3>
        </div>
        <div className='title-input'>
            <input type='text' 
            className='title-input'
            placeholder='  Ecrivez le titre de votre module ici...' 
            onChange={(event) => {setNom(event.target.value);}}>
            </input>
        </div>
        <div className='enseignant'>
            <div className='ProfCours'>
                <label>Chargé cours:</label>
                <select className='ProfCours' id="cars" defaultValue={[]} onChange={(event) => {setProf(event.target.value);}} >
                  <option value="default"></option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className='ProfTd'>
            <label>Chargé TD:</label>
            <Select
            onChange={(event) => {setProfTD(event.target.value);}}
            defaultValue={[]} 
            isMulti 
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"/>
            </div>
            <div className='ProfTp'>
            <label>Chargé TP:</label>
            <Select
            onChange={(event) => {setProfTP(event.target.value);}}
            styles={{backgroundColor: '#f9f9f9'}}
            defaultValue={[]} 
            isMulti 
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"/>
            </div>

        </div>
        <div className='VolumeHoraire'>
            <label>Volume horaire</label>
            <input onChange={(event) => {setVolumeHoraire(event.target.value);}} type='number' placeholder='Volume Horaire'/>
        </div>
        <div className='Description'>
            <label>Description</label>
            <textarea 
            onChange={(event) => {setDescription(event.target.value);}}
            className='description'
            placeholder='Ecrivez la description de votre module ici...'></textarea>
        </div>

    </div>
  )
}

export default AddModule