import "./database.css";

import React  from 'react';
import {FiFilter} from 'react-icons/fi';
import {TiArrowUnsorted} from 'react-icons/ti';
import Datatable from "../../../components/datatable/Datatable";
import Home from "../../Base/Home";
import Profile from "../../../components/sideProfile/test";
import Navbardb from "../../../components/DBNavBar";


const Database =() => {
    return(
        <div className ='db'>
            
            
            
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
               <Profile/>
               <div className="dbnavigation ">
                   <Navbardb/>
               </div>

              
               
                
                
                <Datatable/>
              
            </div>
            
            
           
        </div>
        
    )



}
export default Database