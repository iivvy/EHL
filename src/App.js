import React from 'react';
import './App.css';
import Form from './pages/Login/Form';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Base/Home';
import Single from './pages/Formulaire/Single'
import New from './pages/Formulaire/New'

import Database from './pages/database/Database';
import User from './pages/database/User';


import Interface_etudiant from './pages/interface_etudiant/Interface_etudiant';
import Formulaire from './pages/Formulaire/Formulaire';


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
            <Route path=":ModuleId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
         </Route>
         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="UserId" element={<User/>}/>
            
         </Route>
        
         <Route path="Interface">
            <Route index element={<Interface_etudiant />}/>
            
            
         </Route>
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
