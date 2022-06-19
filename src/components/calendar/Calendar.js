import React from 'react'
import Home from '../../pages/Base/Home'
import './calendar.css'
import { useState } from 'react'
import SideWindow from '../sideWindow/sideWindow'
import axios from 'axios'
import { useEffect } from 'react'

const Calendar = () => {


  const [DateDebut, setDateDebut] = useState('')
  const [DateFin, setDateFin] = useState('')
  const[Module,setModule]=useState("")
  const[Type,setType]=useState('')
  const[Prof,setProf]=useState('')
  const[Salle,setSalle]=useState('')
  const[Promotion,setPromotion]=useState('')
  const[Groupe,setGroupe]=useState('')
  const [Signin,setSignin]=useState(false)
  const [Email,setEmail]=useState('')
  const [jour,setJour] = useState('')
  const [Semestre,setSemestre] = useState('')
 
   

  
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
  const [List,setList]=useState([])
  const [typeList,setTypeList] =useState([])
  const [ListSalle,setListSalle] = useState([])
  const [listEnseignant,setListEnseignant] = useState([])
  const [listGroupe,setListeGroupe] = useState([])
  const [ListPromo,setListPromo]=useState([])
  const fsjg=localStorage.getItem("ListPromoEmploi")
  // setListPromo(JSON.parse(fsjg))
  const promot =()=>{
    setListPromo(JSON.parse(fsjg))
  }
  const listeEnseignant=()=>{
    axios.post(`http://localhost:8080/EmploisTemps/afficherListeEnseignants`,{
      Jour:jour,
      hourDebut:DateDebut,
      hourFin:DateFin,
    }).then((response)=>{
      setListEnseignant(response.data)
      console.log(listEnseignant)
    })
  }
  const listeModule=()=>{
    axios.post(`http://localhost:8080/EmploisTemps/afficherListeModule`,{
      Semestre:Semestre,
      PromoID:PromoId,
    }).then ((response)=>{
      
      setList(response.data)
      console.log(List)
    })
  }

  const type=()=>{
    axios.post(`http://localhost:8080/EmploisTemps/afficherListeType`,{
      nomModule:moduleNom,
      Semestre:Semestre,
      PromoID:PromoId,
    }).then ((response)=>{
      setTypeList(response.data)
    })
  }
  const Sallelist =()=>{
    console.log("datedebut ",DateDebut," datefin ",DateFin , " jour ",jour," type ",Type )
    axios.post(`http://localhost:8080/EmploisTemps/afficherListeSalles`,{
      hourDebut:DateDebut,
      Jour:jour,
      hourFin:DateFin,
      Type:Type,

  }).then((response)=>{
    console.log("jgdfyiqwvfwf",response)
    setListSalle(response.data)
    console.log(ListSalle)
  }).catch((err)=>{
    console.log(err)
  }
  )
}
  const HeureFin =()=>{
    console.log("hvutch")
    axios.post(`http://localhost:8080/EmploisTemps/CalculerHourFin`,{
      hourDebut:DateDebut,
      nomModule:moduleNom,
      Semestre:Semestre,
      PromoID:PromoId,
      Type:Type, 
    }).then((res)=>{
     // const datafin = JSON.parse(res)
      console.log("fiiiiiiin",res.data.hourFin)
      setDateFin(res.data.hourFin)
     
      


    })
    
   
  }
  const Groupelist = ()=>{
    axios.post(`http://localhost:8080/EmploisTemps/afficherListeGroupe`,{
      Type:Type,
      ModuleId:moduleId ,
      Semestre:Semestre,
      PromoID:PromoId,

    }).then((response)=>{
      setListeGroupe(response.data)
    })
  }
  const AjouterSeance =()=>{
    axios.post(`http://localhost:8080/EmploisTemps/ajouterSeance`,{
      GroupeId: GroupeId,
      ModuleId:moduleId,
      Type: Type,
      SalleID: Salle,
      Jour:jour,
      hourDebut:DateDebut,
      hourFin:DateFin,
      EnseignantId:ProfId,
      GroupeNom:GroupeNom,
      Semestre:Semestre,
      PromoNom:PromoNom,
      PromoID:PromoId,
      nomModule:moduleNom,
    }).then((response)=>{
      alert("Seance ajouté avec succès")
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
    console.log("afficher des donnees")
    console.log(moduleId,Type,DateDebut,DateFin,ProfId,Salle,PromoNom,GroupeId,jour,GroupeNom,Semestre,PromoId)
  }
  
  // const Promolist=()=>{
  //   axios.post(`http://localhost:8080/GestionDesAnnes/getPromos`,{
  //     AnneeNom:"2021/2022",
  //   })
  //   .then((response)=>{
  //     setListPromo(response.data)

  //   })
  // }

 
  useEffect(() => {
    listeModule();
    Sallelist();
    listeEnseignant();
    Groupelist();
    promot();
    // Promolist();
  }, []);
   const array= []
  console.log("module",List)
  array.push(Module.split(","))
  const moduleId = array[0][0]
  const moduleNom = array[0][1]
  console.log('youre searching for',moduleId)
  const promo = []
  promo.push(Promotion.split(","))
  const PromoId = promo[0][0]
  const PromoNom = promo[0][1]
  const grp=[]
  grp.push(Groupe.split(","))
  const GroupeId = grp[0][0]
  const GroupeNom = grp [0][1]
  const prf = []
  prf.push(Prof.split(","))
  const ProfId = prf[0][2]


  // console.log("fiiiiiiin",DateFin)
 
  

  return (
   <div>
     <Home/>
     <div className='calendar'>
      <div className='event'>
        <h1> Ajouter une séance:</h1>
      </div>
      <div className='event-form' >
    
        <div className='event'>
        {/* <button onClick={Promolist}>promo</button>  */}
          <label>Promotion:</label>   
          <select  onChange={(event) => {setPromotion(event.target.value);}}>
          {ListPromo.map((promo) => (
                  <option   id={promo.PromoId} value={[promo.PromoId,promo.PromoNom]} >{promo.PromoNom}</option>
                ))}</select>
               
        </div>
        <div className='event'>
        <label>Semestre:</label>   
          <select  onChange={(event) => {setSemestre(event.target.value);}}>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
        
        </select>
        <button onClick={listeModule}>Valider</button> 
              
        </div>
        <div className='event'>
          <label>Module:</label>
          <select   onChange={(event) => {setModule(event.target.value);}}>
                {List.map((mod) => (
                  <option   id={mod.ModuleId} value={[mod.ModuleId,mod.nomModule]} >{mod.nomModule}</option>
                ))}
              </select>
              <button onClick={type}>Valider</button>  
        </div>
          <div className='event'>
          <label>Type:</label>
          <select  onChange={(event) => {setType(event.target.value);}} name='type'>
          {typeList.map((type) => (
                  <option value={type.TypeNom}>{type.TypeNom}</option>
                ))}
         
          </select>
          <button onClick={listGroupe}>Valider</button>  
        </div>
        <div className='event'>
          <label>Jour:</label>
          <select onChange={(event) => {setJour(event.target.value);}} type='text' placeholder='jour'>
            <option value='samedi'></option>
            <option value='Dimanche'>Dimanche</option>
            <option value='Lundi'>Lundi</option>
            <option value='Mardi'>Mardi</option>
            <option value='Mercredi'>Mercredi</option>
            <option value='Jeudi'>Jeudi</option>
            </select>
            <button>Valider</button>  
            </div>
          {/* <div className='event'>
          
        </div> */}

        <div className='event'>
          <label>Date début:</label>
          {/* <input onClick={heureFin} onChange={(event) => {setDateDebut(event.target.value);}} type='text' placeholder='00:00:00'></input> */}
          <input placeholder='00:00:00'   onChange={(event) => {setDateDebut(event.target.value);}} >
     
             </input>
             <button onClick={HeureFin}>Valider</button>  
          </div>
          {/* <div className='event'>
          
        </div> */}
        <div className='event'>
          <label>Date Fin:</label>
          <input  onChange={(event) => {setDateFin(event.target.value);}} value={DateFin} type='text' placeholder='00:00:00'></input>
          <button onClick={Sallelist}>Valider</button>  
          </div>
          {/* <div className='event'>
          
        </div> */}
        <div className='event'>
          <label>Salle:</label>
          <select onChange={(event) => {setSalle(event.target.value);}}>
          {ListSalle.map((salle) => (
                  <option  value={salle.SalleNom} >{salle.SalleNom}</option>
                ))}
          </select>
          <button onClick={listeEnseignant}>Valider</button>  
        </div>
       
        
        <div className='event'>
          <label>Enseignant:</label>
          <select  onChange={(event) => {setProf(event.target.value);}} name='select'>
          {listEnseignant.map((Prof) => (
                  <option  value={[Prof.userID,Prof.username,Prof.EnseignantId]} >{Prof.username}</option>
                ))}
          </select>
          <button onClick={Groupelist}>Valider</button>  
        </div>
        <div className='event'>
          <label>Groupe:</label>
          <select onChange={(event) => {setGroupe(event.target.value);}}>
          {listGroupe.map((grp) => (
                  <option value={[grp.GroupeID,grp.GroupeNom]} >{grp.GroupeNom}</option>
                ))}
            </select>
            
        </div>
       
       
        
        <div className='event-button'>
        <button onClick={AjouterSeance} >Ajouter</button>
      </div>
      
      </div>
    
    </div>
   </div>
  )
}

export default Calendar