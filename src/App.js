import React from 'react';
import './App.css';
import Form from './pages/Login/Form';

import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Base/Home';
import Mpasse1 from './pages/Mpasse1/Mpasse1'
import Mpasse from './pages/Mpasse/Mpasse';
import Database from './pages/database/Database';
import User from './pages/database/User';
import Formulaire from './pages/Formulaire/Formulaire';
import Enseignant from './pages/Formulaire/Enseignant';
import Interface from './pages/interface_enseignant/Interface';

function App() {
  return(
    <div className='App'>
       <Enseignant />

      
</div>
  
  )}

export default App;
