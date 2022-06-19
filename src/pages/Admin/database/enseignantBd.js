import "./database.css";

import React  from 'react';


import {FiFilter} from 'react-icons/fi';
import {TiArrowUnsorted} from 'react-icons/ti';

import Navbardb from "../../../components/DBNavBar";

import Profile from "../../../components/sideProfile/ProfileStudent";
import TeacherTable from "../../../components/datatable/TeacherTable";
import Home from "../../Base/Home";
import GetTeacher from "../users/teacher/GetTeacher";

const Enseignant = () => {
  return (
    <div className ='db'>
            <Home/>
            <div className="dbContainer">
              
              <div className="dbtitle">
                <h2>Base de Donnée</h2>
                {/* <div className="buttons">
                <div className="FilterButton">
                    <FiFilter style={{color :'#9F9999'}}/>Filtrer</div>
                    <div className="empty"></div>
                <div className="sortButton">
                    <TiArrowUnsorted/>Trier</div>
                </div> */}
              
              </div>
              {/* <Profile /> */}
              <div className="dbnavigation ">
                  <Navbardb/>
              </div>

             
              
               <GetTeacher/>
           </div>
          
           
           
        </div>
  );
};

export default Enseignant;
