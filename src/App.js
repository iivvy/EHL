import React from 'react';
import './App.css';
import Form from './pages/Login/Form';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Base/Home';


import Database from './pages/database/Database';
import User from './pages/database/User';

import Formulaire from './pages/Formulaire/Formulaire';
import Enseignant from './pages/database/enseignantBd';
import AutoForm from './pages/Formulaire/AutoForm/AutoForm';
import Module from './pages/module/module';
import Temps from './pages/temps/temps';
import Chat from './pages/chat/chat';
import Etudiant from './pages/database/etudiantBd';
import Evaluation from './pages/evaluation/evaluation';
import Staff from './pages/database/staffBd'



function App() {
  return(
    <div className='App'>
      <Home/>
      <BrowserRouter>
      <Routes>
       <Route path="/" >
         <Route index element={<Home/>}/>

         <Route path="Login" element={<Form/>}/>
         <Route path="form">
            <Route index element={ <AutoForm/>}/>
         </Route>

         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="etudiantBd" element={<Etudiant/>}/>
            <Route path="enseignantBd" element={<Enseignant/>}/>
            <Route path="staffBd" element={<Staff/>}/>
         </Route>

         <Route path="module">
            <Route index element={< Module/>}/>
         </Route>

         <Route path="temps">
            <Route index element={< Temps/>}/>
         </Route>

         <Route path="chat">
            <Route index element={< Chat/>}/>
         </Route>

         <Route path="evaluation">
            <Route index element={< Evaluation/>}/>
            
            
         </Route>
        
        
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
