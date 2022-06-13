import "./database.css";

import React  from 'react';

import {FiFilter} from 'react-icons/fi';
import {TiArrowUnsorted} from 'react-icons/ti';

import Navbardb from "../../../components/DBNavBar";
import Home from "../../Base/Home";

import Profile from "../../../components/sideProfile/test";
import StudentTable from "../../../components/datatable/StudentTable";

const Etudiant = () => {
  return (
    <div className ='db'>
      <Home/>
            
    {/* <NavBar/> */}
      <div className="dbContainer">
          {/* <TopBar/>
         <hr /> */}
         <div className="dbtitle">
           <h2>Base de Donnée</h2>
           <div className="buttons">
           <div className="FilterButton">
               <FiFilter style={{color :'#9F9999'}}/>Filtrer</div>
               <div className="empty"></div>
           <div className="sortButton">
               <TiArrowUnsorted/>Trier</div>
           </div>
         
         </div>
         <Profile />
         <div className="dbnavigation ">
             <Navbardb/>
         </div>

        
         
          <StudentTable/>
     
      </div>
     
  </div>
  );
};

export default Etudiant;
