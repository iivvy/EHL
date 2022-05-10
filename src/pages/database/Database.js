import "./database.css";
import NavBar from '../../components/NavBar';
import React  from 'react';
import TopBar from '../../components/TopBar';
import Datatable from '../../components/datatable/Datatable';
import {FiFilter} from 'react-icons/fi';
import {TiArrowUnsorted} from 'react-icons/ti';

import Navbardb from "../../components/DBNavBar";


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
               <div className="dbnavigation ">
                   <Navbardb/>
               </div>

              
               
                <Datatable/>
            </div>
           
        </div>
        
    )



}
export default Database