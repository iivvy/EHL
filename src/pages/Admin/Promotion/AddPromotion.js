import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddPromotion() {
  const [Nom,setNom]=useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{float:"right",backgroundColor:"rgb(167, 203, 219)",color:"white",marginRight:"130px",border:"none"}} variant="outlined" onClick={handleClickOpen}>
        Ajouter Promotion
      </Button>
      <Dialog 
      style={{height:"600px",width: '600px',alignItems:"center",justifyContent:"center",marginLeft:"450px"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ajouter une promotion"}</DialogTitle>
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