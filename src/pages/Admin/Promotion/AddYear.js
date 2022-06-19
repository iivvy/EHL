import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import axios from 'axios';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddYear() {
  const [Nom,setNom]=useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ajouteryear =()=>{
    axios.post(``,{Nom})
    .then(()=>{
      alert("Opération réussite")
    })
  }

  return (
    <div>
      <Button style={{
          width:"620px",
          overflow:"hidden",
          color:"black",
          borderRadius:"20px",
          height:"100px",
          marginLeft:"500px",
          backgroundColor:"#F3F0EB",
          fontFamily:'Poppins',
          padding:"1rem",
          fontSize:"18px",
          fontWeight:"bold",
          
          border:"none"
          }} variant="outlined" onClick={handleClickOpen}> <BsPlusLg style={{width:"30px",height:"30px",padding:"19px 30px 18px 5px"}}/>
        Ajouter une année universitaire
      </Button>
      <Dialog 
      style={{height:"600px",width: '600px',alignItems:"center",justifyContent:"center",marginLeft:"450px"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ajouter une année universitaire"}</DialogTitle>
        <DialogContent >
            <div className='field'>
            <TextField onChange={(event) => {setNom(event.target.value);}} style={{width:"300px"}} label="Nom" type='text' variant="standard"></TextField>
            </div>
       
          
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
}