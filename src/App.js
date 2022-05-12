import React from 'react';
import './App.css';
import Form from './pages/Login/Form';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Base/Home';


import Database from './pages/database/Database';
import User from './pages/database/User';

import Formulaire from './pages/Formulaire/Formulaire';
import Enseignant from './pages/Formulaire/Enseignant';
import AutoForm from './pages/Formulaire/AutoForm/AutoForm';



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
            <Route index element={ <AutoForm/>}/>
       
         </Route>
         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="UserId" element={<User/>}/>
            
         </Route>
        
         <Route path="Interface">
            <Route index element={< Enseignant/>}/>
            
            
         </Route>
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
