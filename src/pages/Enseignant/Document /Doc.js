import React from 'react'

import './Doc.css'
import { useState } from 'react'
import HomeEns from '../../Base/HomeEns'
import AutoForm from './AutoForm/AutoForm'


const Doc= () => {


  
  const[Promotion,setPromotion]=useState('')
  const[Semestre,setSemestre]=useState('')
  const[Module,setModule]=useState('')
  const[Type,setType]=useState('')
   
  const handleClick = () => {
    
  }

  return (
   <div>
     <HomeEns/>
     <div className='calendar'>
      <div className='event'>
        <h1> Ajouter document:</h1>
      </div>
      <div className='event-form' >
        <div className='event'>
          <label>Promotion:</label>   
          <select onChange={(event) => {setPromotion(event.target.value);}} name='promotion'>
          <option value="1CP">1CP</option>
          <option value="2CP">2CP</option>
          <option value="1SC">1SC</option>
          <option value="2SC">2SC</option>
          <option value="3SC">3SC</option>
          </select>   
              
        </div>
        <div className='event'>
          <label>Semestre:</label>
          <select onChange={(event) => {setSemestre(event.target.value);}} name='semetre'>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
          </select>
        </div>
        <div className='event'>
          <label>Module:</label>
          <select onChange={(event) => {setModule(event.target.value);}} name='module'>
          <option value="ACSI">ACSI</option>
          <option value="LOW">LOW</option>
          <option value="SYS">SYS</option>

          </select>
          </div>
          <div className='event'>
          <label>Type:</label>
          <select onChange={(event) => {setType(event.target.value);}} name='type'>
          <option value="TD">TD</option>
          <option value="TP">TP</option>
          <option value="Cours">Cours</option>

          </select>
          </div>
           <AutoForm/>
        <div className='event-button'>
        <button onClick={handleClick}>Ajouter</button>
      </div>
      
      </div>
    
    </div>
   </div>
  )
}

export default Doc