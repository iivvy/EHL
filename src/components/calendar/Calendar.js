import React from 'react'
import Home from '../../pages/Base/Home'
import './calendar.css'
import { useState } from 'react'
import SideWindow from '../sideWindow/sideWindow'

const Calendar = () => {


  const [DateDebut, setDateDebut] = useState('')
  const [DateFin, setDateFin] = useState('')
  const[Module,setModule]=useState('')
  const[Type,setType]=useState('')
  const[Prof,setProf]=useState('')
  const[Salle,setSalle]=useState('')
  const[Promotion,setPromotion]=useState('')
  const[Groupe,setGroupe]=useState('')
  const [Signin,setSignin]=useState(false)
  const [Email,setEmail]=useState('')
 
   

  
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
     <Home/>
     <div className='calendar'>
      <div className='event'>
        <h1> Ajouter une séance:</h1>
      </div>
      <div className='event-form' >
        <div className='event'>
          <label>Date début:</label>
          <input onChange={(event) => {setDateDebut(event.target.value);}} type='datetime-local' placeholder='Date Début'></input></div>
          <div className='event'>
          <label>Date fin:</label>
          <input onChange={(event) => {setDateFin(event.target.value);}} type='datetime-local' placeholder='Date Fin'></input>
        </div>
        <div className='event'>
          <label>Module:</label>
          <select onChange={(event) => {setModule(event.target.value);}} name='module'>
          <option value="Cours">ACSI</option>
          <option value="TD">SE</option>
          <option value="TP">THL</option>
          </select>
          </div>
        <div className='event'>
          <label>Type:</label>
          <select onChange={(event) => {setType(event.target.value);}} name='type'>
          <option value="Cours">Cours</option>
          <option value="TD">TD</option>
          <option value="TP">TP</option>
          </select>
        </div>
        <div className='event'>
          <label>Enseignant:</label>
          <select onChange={(event) => {setProf(event.target.value);}} name='select'>
          <option value="Cours">bensaber</option>
          <option value="TD">benslimane</option>
          <option value="TP">amrane</option>
          </select>
        </div>
        <div className='event'>
          <label>Salle:</label>
          <select onChange={(event) => {setSalle(event.target.value);}}>
          <option value="Cours">S1</option>
          <option value="TD">Amphi E</option>
          <option value="TP">TP 12</option>
          </select>
        </div>
        <div className='event'>
          <label>Promotion:</label>   
          <select onChange={(event) => {setPromotion(event.target.value);}}>
          <option value="Cours">1CP</option>
          <option value="TD">2CP</option>
          <option value="TP">1SC</option></select>       
        </div>
        <div className='event'>
          <label>Groupe:</label>
          <select onChange={(event) => {setGroupe(event.target.value);}}>
          <option value="Cours">G1</option>
          <option value="TD">G3</option>
          <option value="TP">G5</option>
            </select> 
        </div>
        <div className='event-button'>
        <button onClick={handleClick}>Ajouter</button>
      </div>
      
      </div>
    
    </div>
   </div>
  )
}

export default Calendar