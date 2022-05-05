import "./database.css";
import NavBar from '../../components/NavBar';
import React  from 'react';
import TopBar from '../../components/TopBar';
import Datatable from '../../components/datatable/Datatable';


const Database =() => {
    return(
        <div className ='db'>
          <NavBar/>
            <div className="dbContainer">
                <TopBar/>
               <hr />
                <Datatable/>
            </div>
           
        </div>
        
    )



}
export default Database