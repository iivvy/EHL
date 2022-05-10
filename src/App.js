import React from 'react';
import './App.css';
import Form from './pages/Login/Form';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Base/Home';


import Database from './pages/database/Database';
import User from './pages/database/User';


import Interface_etudiant from './pages/interface_etudiant/Interface_etudiant';
import Formulaire from './pages/Formulaire/Formulaire';
import FormEtudAuto from './pages/Formulaire/FormEtudAuto';


function App() {
  return(
    <div className='App'>
      <Home/>
     

      <BrowserRouter>
      <Routes>
       <Route path="/" >
         <Route index element={<Home/>}/>

         <Route path="Login" element={<Form/>}/>
         <Route path="Module">
            <Route index element={ <Formulaire/>}/>
       
         </Route>
         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="UserId" element={<User/>}/>
            
         </Route>
        
         <Route path="Interface">
            <Route index element={<FormEtudAuto />}/>
            
            
         </Route>
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
