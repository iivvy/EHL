import React from 'react';
import './App.css';
import Form from './pages/Login/Form';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';

import Cours from './pages/Cours/Cours';
import Single from './pages/Cours/Single'
import New from './pages/Cours/New'

import Database from './pages/database/Database';
import User from './pages/database/User';


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
       <Route path="/" >
         <Route index element={<Home/>}/>
         <Route path="Login" element={<Form/>}/>
         <Route path="Module">
            <Route index element={ <Cours/>}/>
            <Route path=":ModuleId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
         </Route>
         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="UserId" element={<User/>}/>
         </Route>
        
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
