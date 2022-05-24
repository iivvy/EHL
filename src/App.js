import Mpasse from './pages/Mpasse/Mpasse';
import Database from './pages/database/Database';
import User from './pages/database/User';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Formulaire from './pages/Formulaire/Formulaire';

import AutoForm from './pages/Formulaire/AutoForm/AutoForm';
import Module from './pages/module/module';
import Temps from './pages/temps/temps';
import Chat from './pages/chat/chat';
import Etudiant from './pages/database/etudiantBd';
import Evaluation from './pages/evaluation/evaluation';
import Staff from './pages/database/staffBd'
import Enseignant from './pages/Formulaire/Enseignant';
import Interface from './pages/interface_enseignant/Interface';
import Enseignants from './pages/database/enseignantBd';

import SideWindow from './components/sideWindow/sideWindow';
import Home from './pages/Base/Home';
import Form from './pages/Login/Form';
import Mpasse1 from './pages/Mpasse1/Mpasse1';
import Annee from './pages/module/annee';
import Event from './pages/event/event';
import Test from './test/test';
import Userr from './pages/user/User';
import Profile from './components/sideProfile/test';
import Post from './pages/event/Addpost';
import SinglePost from './pages/event/SinglePost';
function App() {
  return(
    <div className='App'>
       
      <Home/>
      <BrowserRouter>
      <Routes>
       <Route path="/" >
         {/* <Route index element={<Home/>}/> */}

         <Route path="Login" element={<Form/>}/>
         <Route path="form">
            <Route index element={ <AutoForm/>}/>
         </Route>

         <Route path="Bdd">
            <Route index element={<Database />}/>
            <Route path="etudiantBd" element={<Etudiant/>}/>
            <Route path="enseignantBd" element={<Enseignants/>}/>
            <Route path="staffBd" element={<Staff/>}/>
         </Route>

         <Route path="module">
            <Route index element={< Module/>}/>
            <Route path='annee' element={< Annee/>}/>
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
         <Route path="mpasse">
            <Route index element={<Mpasse/>}/>
   

         </Route>
         <Route path="mpasse1">
            <Route index element={<Mpasse1/>}/>
         </Route>
         <Route path="ens">
         <Route index element={< Enseignant/>}/>
           
         </Route>
        
         <Route path="formetudiant">
            <Route index element={<Formulaire/>}/>
         </Route>
         <Route path="side">
            <Route index element={<SideWindow/>}/>
         </Route>
         <Route path="test">
            <Route index element={<SinglePost/>}/>
         </Route>

        
        
            
      

      </Route>
 
  </Routes>
  </BrowserRouter>
</div>
  
  )}

export default App;
