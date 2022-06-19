// import React ,{useState} from "react";
// import './AddSalle.css';
// function Salle(){
//     const [Type,setType]=useState('');
//     const [Capacité,setCapacité]=useState(0);
//     const [Nom,setNom]=useState('');
//     const AddSalle=()=>{};
//     return(
//         <div>
//             <div className="Salle">
//                 <div className="grp">
//                 <label> Nom :</label>
//                 <input
//                 type='text' 
//                 placeholder="Nom" 
//                 onChange={(event) => {setNom(event.target.value);}} 
//                 ></input>
//                 </div>
//                 <div className="grp">
//                 <label> Type :</label>
//                 <select
//                 type='text' 
//                 placeholder="Type" 
//                 onChange={(event) => {setType(event.target.value);}} 
//                 >
//                     <option value='type'></option>
//                     <option value='Amphi'>Amphi</option>
//                     <option value='TD'>TD</option>
//                     <option value='TP'>TP</option>
//                 </select>
//                 </div>
//                 <div className="grp">
//                 <label> Capacité :</label>
//                 <input
//                 type='number' 
//                 placeholder="Capacité" 
//                 onChange={(event) => {setCapacité(event.target.value);}} 
//                 ></input>
//                 </div>
                
//             </div>
//         </div>

//     )

// }
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import './AddSalle.css';
import axios from 'axios';

const typesalle = [
  {
    value: 'Cours',
    label: 'Cours',
  },
  {
    value: 'TD',
    label: 'TD',
  },
  {
    value: 'TP',
    label: 'TP',
  },]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddSalle() {
  const [Type,setType]=useState('');
  const [Capacité,setCapacité]=useState(0);
  const [SalleNom,setSalleNom]=useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ajouterSalle=()=>{
    console.log(SalleNom);
    axios.post(`http://localhost:8080/GestionDesModules/ajouterSalle`,{
      SalleNom:SalleNom,
      Type:Type,
      Capacité:Capacité
    }).then((res)=>{
      alert("Salle ajoutée avec succès");

    })
  }

  return (
    <div>
      <Button style={{float:"right",backgroundColor:"#195e9a",color:"white"}} variant="outlined" onClick={handleClickOpen}>
        Ajouter salle
      </Button>
      <Dialog 
      style={{height:"600px",width: '600px',alignItems:"center",justifyContent:"center",marginLeft:"450px"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ajouter une salle"}</DialogTitle>
        <DialogContent >
            <div className='field'>
            <TextField  onChange={(event) => {setSalleNom(event.target.value);}} style={{width:"300px"}} label="Nom" type='text' variant="standard"></TextField>
            </div>
       
          
          <div className='field' >
          <TextField onChange={(event) => {setCapacité(event.target.value);}}  style={{width:"300px"}} label="Capacité" type='number' variant="standard"></TextField>
          </div>
          
          <div className='field'>
          <TextField onChange={(event) => {setType(event.target.value);}}  style={{width:"300px"}} select label="Type" variant="standard">
          {typesalle.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          </div>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={ajouterSalle}>Ajouter</Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
}

