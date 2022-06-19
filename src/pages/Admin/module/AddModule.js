import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import Home from '../../Base/Home'
import './AddModule.css'




const AddModule = () => {
    const[nomModule,setNomModule] = useState("");
    const[VolumeCour,setVolumeCour] = useState("");
    const [VolumeTD,setVolumeTD] =useState("");
    const [VolumeTP,setVolumeTP] =useState("");
    const[promoID,setPromoID] = useState("");
    const[Semestre,setSemestre] =useState("")


    const ajoutermodule=()=>{
      console.log(nomModule);
      console.log("volume cours",VolumeCour)
      axios.post(`http://localhost:8080/GestionDesSalles/ajouterModule`,{
        nomModule:nomModule,
        VolumeCour:VolumeCour,
        VolumeTD:VolumeTD,
        VolumeTP:VolumeTP,
        PromoID:"3",
        Semestre:Semestre
        

      
      }).catch(err=>{
        console.log(err.response.data)
      })
      // .catch (error) {
      //   console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      // }
    }
    
  return (
    <div>
      <Home/>
    <div className='AddModule'>
    
        <div className='header'>
            <h3>Ajouter module</h3>
        </div>
        <div className='title-input'>
            <input type='text' 
            className='title-input'
            placeholder='  Ecrivez le titre de votre module ici...' 
            onChange={(event) => {setNomModule(event.target.value);}}>
            </input>
        </div>
        <div className='VolumeCour'>
            <label>Volume Cours</label>
            <input onChange={(event) => {setVolumeCour(event.target.value);}} type='text'  placeholder='00:00:00'/>
        </div>
        <div className='VolumeTD'>
            <label>Volume TD</label>
            <input onChange={(event) => {setVolumeTD(event.target.value);}} type='text'  placeholder='Volume TD'/>
        </div>
        <div className='VolumeTP'>
            <label>Volume TP</label>
            <input onChange={(event) => {setVolumeTP(event.target.value);}} type='text'  placeholder='Volume TP'/>
        </div>
        {/* <div className='promo'>
          <label>promo</label>
          <input onChange={(event) => {setPromoID(event.target.value);}}></input>
        </div> */}
        <div className='Semestre'>
            <label>Semestre</label>
            <input onChange={(event) => {setSemestre(event.target.value);}}></input>
        </div>
        <button onClick={ajoutermodule}>Ajouter module</button>
        
        </div>
    </div>
  )
}

export default AddModule