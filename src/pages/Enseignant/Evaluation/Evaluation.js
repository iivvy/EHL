import React from 'react'

import './Evaluation.css'
import { useState } from 'react'
import HomeEns from '../../Base/HomeEns'
import UploadExcelens from './UploadExcelens'


const Evaluation= () => {


  
  const[Promotion,setPromotion]=useState('')
  const[Semestre,setSemestre]=useState('')
  const[Module,setModule]=useState('')
  const[groupe,setGroupe]=useState('')
   

  
  // var gapi = window.gapi;
  // var CLIENT_ID='996799482767-sob16hpt7ofkbjauaf9a2hgdm0vqnbpv.apps.googleusercontent.com'
  // var API_KEY='AIzaSyAz7zK8HDiyH50qJX7T26rYc9405P2BU2A'
  // var SCOPES = "https://www.googleapis.com/auth/calendar"
  // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  // const handleClick = () => {
  //   gapi.load('client:auth2', ()  => {
  //     console.log('loaded client')
  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     })
  //     gapi.client.load('calendar', 'v3', () => console.log('bam!'))

  //     gapi.auth2.getAuthInstance().signIn()
  //     .then(() => {
  //       var event={DateDebut,
  //         DateFin,
  //         Module,
  //         Type,
  //         Prof,
  //         Salle,
  //         Promotion,
  //         Groupe

  //       }
  //       var request = gapi.client.calendar.events.insert({
  //         'calendarId': 'primary',
  //         'resource': event,
  //       })

  //       request.execute(event => {
  //         console.log(event)
  //         window.open(event.htmlLink)
  //       })

  //     })
  //   });
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
          <label>Groupe:</label>
          <select onChange={(event) => {setGroupe(event.target.value);}} name='groupe'>
          <option value="G2">G2</option>
          <option value="G3">G3</option>
          <option value="G6">G6</option>

          </select>
          </div>
           <UploadExcelens/>
        <div className='event-button'>
        <button onClick={handleClick}>Ajouter</button>
      </div>
      
      </div>
    
    </div>
   </div>
  )
}

export default Evaluation